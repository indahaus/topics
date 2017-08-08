const jwt = require("jsonwebtoken");
const assert = require("assert");
const ObjectID = require("mongodb").ObjectID;
const router = require("express").Router();
const getdb = require("../db");

let db = null; 
getdb.then(database => db = database); 

// Validator 
const validator = require("../validators/session.validator");

router.post("/verify-token", (req, res) => {
    if (req.body.token) {
        jwt.verify(req.body.token, "strongsecret", (err, decoded) => {
            if (err)
                res.json({ valid: false});
            else 
                db.collection("users")
                    .findOne({ _id: ObjectID(decoded.data) })
                    .then(data => {
                        if (!req.session.user)
                            req.session.user = data; 
                        
                        delete(data["password"]);

                        res.json({
                            valid: true, 
                            user: data,
                            decoded
                        });
                    }).catch(err => console.error(err));
        }); 
    }

    else res.json({ valid: false });
});

router.get("/check", (req, res) => {
    let priority = 5;
    
    try {
        priority = parseInt(req.query.priority);
    } 
    catch(e) {
        res.status(403).send("Your request is not valid.");
        return;
    }

    res.json({ 
        session: req.session.user &&  priority >= req.session.user.priority 
            ? req.session.user : null 
    });
});

router.post("/login", (req, res) => {

    if (!validator.doLogin(req.body)) {
        res.json({ ok: false });
        return;
    }
    
    db.collection("users")
        .findOne({ name: req.body.username })
        .then(data => {
            if (data && data.name === req.body.password) {
                req.session.user = data;
                let token = jwt.sign({
                    data: data._id 
                }, "jgaskldgskgs");

                delete(data["password"]);

                res.json({ 
                    ok: true, 
                    user: data, 
                    token: token
                });
            }

            else 
                res.json({ ok: false })
        })
        .catch(err => console.error(err));
});

router.post("/logout", (req, res) => {
    req.session.destroy(err => { 
        if (err) throw err;
        res.send({ ok: true })
    }); 
});

module.exports = router;