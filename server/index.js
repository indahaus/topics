const assert = require("assert"); 
const path = require("path");

const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");
const session = require("express-session");

const clientPath = path.join(__dirname, "..", "client");

const sessionRoutes = require("./routes/session");
const topicsRoutes = require("./routes/topics");

app.set("view engine", "ejs");
app.set("port", 5555);

app.use(bodyParser.json());
app.use(session({ 
    secret: 'superstrongsecret', 
    resave: false, 
    saveUninitialized: true
}));

app.use(express.static(path.join(clientPath, "/dist")));

app.use("/api/session", sessionRoutes);
app.use("/api/topics", topicsRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "dist/index.html"));
});

app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")} ...`);
});
