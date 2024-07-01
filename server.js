const express = require("express");
const {logger} = require("./logger");
const {mongoose} = require("mongoose");
const authRouter = require('./authRouter');

const PORT = process.env.PORT || 5000;
const host = '127.0.0.1';
app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb://ben:aflik@127.0.0.1:27017/auth_roles');
        app.listen(PORT, host)
        logger.info("Server started on port: ", PORT)
    } catch (e) {
        logger.error(e)
    }
}

start()