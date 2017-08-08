const assert = require("assert");
const ObjectID = require("mongodb").ObjectID;
const router = require("express").Router();

const getdb = require("../db");

let db = null; 
getdb.then(database => db = database); 

// Validators 
const validator = require("../validators/topics.validator");

router.post("/pending", (req, res) => {
    if (!req.session.user || req.session.user.priority >= 3) {
        res.status(401).send("You can't do that");
        return;
    }

    if (!validator.doBoolean(req.body.value)) {
        res.status(403).send("Well, that was weird.");
        return;
    }

    let update = {};
    
    if (req.body.value)
        update.$set = { 
            passed: true, 
            reviewed: true 
        };

    else 
        update.$set = { 
            passed: false, 
            reviewed: true 
        };

    db.collection("titles")
        .update(
            { _id: ObjectID(req.body.id) },
            update
        )
        .then(() => res.json({ok: true}))
        .catch(err => console.error(err));
});

router.get("/pending", (req, res) => {
    if (!req.session.user || req.session.user.priority > 3) {
        res.status(401).send("You can't do that");
        return;
    }

    db.collection("titles")
        .find({ reviewed: false })
        .toArray()
        .then(data => res.json(data))
        .catch(err => console.error(err));
});

router.get("/", (req, res) => {
    let aggregator = []; 
    
    aggregator.push({ $match:  { passed:  true }}); 

    if (req.query.search)  {
        if (!validator.doSearch(req.query.search)) {
            res.json({ titles: [] });
            return;
        }
        aggregator.push({
            $match: {
                title: {
                    $regex: req.query.search,
                    $options: 'i'
                }
            } 
        }, { 
            $limit: 10 
        });
    }
    
    else if (req.query.category) {
        if (!validator.doOptional(req.query.category)) {
            res.status(403).send("Well, that was weird.");
            return;
        }
        aggregator.push({
            $match: {
                category: req.query.category
            }
        });
    }
    db.collection("titles")
        .aggregate([
            ...aggregator, 
            { 
                $lookup: { 
                    from: "replies", 
                    localField: "_id", 
                    foreignField: "title_id", 
                    as: "replies" 
                }
            }, 
            {
                $addFields: {
                    repliesCount: { 
                        $size: "$replies"  
                    }
                }
            }
        ]).toArray((err, titles) => {
            assert.equal(err, null);
            res.json(titles);
        });
});

router.post("/", (req, res) => {
    if (!req.session.user) { 
        res.status(401).send("You can't do that.");
        return;
    }

    console.log(req.body); 

    if (!validator.doPost(req.body)) {
        res.status(403).send("Well, that was weird.");
        console.log("Validation failed");
        return;
    }

    let payload = req.body; 
    payload.reviewed = false; 
    
    // Topics submitted by mods are approved immediately 
    if (req.session.user && req.session.user.priority < 3)
        payload.passed = true;
    else 
        payload.passed = false;

    db.collection("titles")
        .insertOne(payload)
        .then(r => {  
            if (req.session.user && req.session.user.priority < 3)
                res.json({ _id: r.insertedId, navigate: true });
            else 
                res.json({ _id: r.insertedId });
        })
        .catch(err => {
            console.error(err);
            res.status(400).end();
        });
});

router.get("/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(403).send("Well, that was weird"); 
        return;
    }

    let match = {
        _id: ObjectID(req.params.id)
    };

    if (!req.session.user || req.session.user.priority > 3)
        match.passed = true;

    db.collection("titles")
        .aggregate([
            {
                $match: match 
            },
            {
                $lookup: {
                    from: "replies", 
                    localField: "_id", 
                    foreignField: "title_id", 
                    as: "replies" 
                }
            }, { $addFields: {
                    repliesCount: { 
                        $size: "$replies"
                    }
                }
            },
            {
                $project: {
                    replies: 0
                }
            },
            {
                $limit: 1
            }
        ]).toArray((err, data) => {
            assert.equal(err, null);
            if (!data.length)
                res.status(401).json({ ok: false }); 
            res.json(data[0]);
        });
});

router.delete("/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(403).send("Well, that was weird"); 
        return;
    }
    
    if (req.session.user && req.session.user.priority < 3)
        db.collection("titles")
            .deleteOne({ _id: ObjectID(req.params.id) })
            .then(() => res.json({ ok: true }))
            .catch(err => {
                console.error(err);
                res.status(400).end();
            });
    else 
        res.status(401).end();
});

router.put("/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(403).send("Well, that was weird"); 
        return;
    }
    
    if (req.session.user && req.session.user.priority < 3) {
        let payload = req.body; delete(payload._id);

        db.collection("titles")
            .updateOne(
                { _id: ObjectID(req.params.id) }, 
                { $set: payload })
            .then(() => res.status(200).json({ ok: true }))
            .catch(err => res.status(400).end());
    }

    else 
        res.status(401).send("You can't do that!");
});

router.get("/:id/count", (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(403).send("Well, that was weird"); 
        return;
    }
    
    db.collection("replies")
        .count({ title_id: ObjectID(req.params.id) })
        .then(r => res.json({ count: r }))
        .catch(err => console.error(err));
});

router.post("/:id/discussion", (req, res) => {
    if (!req.session.user) {
        res.status(401).send("You can't do that.");
        return;
    }

    if (!validator.doReply(req.body) || 
        !ObjectID.isValid(req.params.id)) {
            res.status(403).send("Well, that was weird"); 
            return;
    }

    let payload = req.body;
    payload.title_id = ObjectID(req.params.id);
    payload.datetime = Date.now();
    payload.name = req.session.user.name;

    db.collection("replies")
        .insertOne(payload)
        .then(r => 
            res.json({
                id: r.insertedId, 
                datetime: payload.datetime
            }))
        .catch(err =>  { 
            console.error(err);
            res.status(400).end();
        });
});

router.get("/:id/discussion", (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        res.status(403).send("Well, that was weird"); 
        return;
    }

    let query = { 
        title_id: ObjectID(req.params.id) 
    };


    if (Object.keys(req.query).length) {
        if (!validator.doNumbers(req.query.last)) {
            res.status(403).send("Well, that was weird"); 
            return;
        }

        query.datetime = {
            $lt: parseInt(req.query.last)
        };
    }
    
    db.collection("replies")
        .find(query)
        .sort({ datetime: -1 })
        .limit(10)
        .toArray()
        .then(docs => res.json(docs))
        .catch(err => {
            console.error(err);
            res.status(400).end();
        });
});

module.exports = router;