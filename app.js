const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongoose-connection");

const productsRouter = require("./routes/productsRouter");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})