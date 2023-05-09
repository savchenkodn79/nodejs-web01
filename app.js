const express = require("express")
const path = require("path")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const port = process.env.PORT || 1337;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static(path.join(__dirname, "./")));

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/service1", (req, res) => {
   res.sendFile(path.join(__dirname, "./service1.html"));
});

app.get("/service2", (req, res) => {
   res.sendFile(path.join(__dirname, "./service2.html"));
});

app.get("/service3", (req, res) => {
   res.sendFile(path.join(__dirname, "./service3.html"));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App at: http://localhost:${port}`);
    }
});

module.exports = app;