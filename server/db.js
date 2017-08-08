const MongoClient = require("mongodb").MongoClient;

function db() {
    const url = "mongodb://localhost:27017/topics";
    return MongoClient.connect(url);
}

module.exports = db();
