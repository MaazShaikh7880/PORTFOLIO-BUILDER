const express = require("express");
const http = require("http");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
var mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

mongoose.connect(
    "mongodb+srv://PortRay:" +
    process.env.MONGO_PASS +   
    "@portfolio-builder.p5sobie.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = http.createServer(app);
server.listen(port, () => {
    console.log("Listening on port " + port);
});