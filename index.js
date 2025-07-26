const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.json({
        status: "Success",
        message: "This is about page",
    });
});

app.get("/contact", (req, res) => {
    res.json({
        status: "Success",
        message: "This is contact page",
    });
});

app.get("/profile", (req, res) => {
    res.json({
        status: "Success",
        message: "This is profile page",
    });
});

app.get("/newsfeed", (req, res) => {
    res.json({
        status: "Success",
        message: "This is newsfeed page",
    });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`);
});
