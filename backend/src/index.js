const express = require('express');
const { connectDB } = require("./mongo/connection");
const cors = require('cors');
const router = require("./routers/index");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/',router);

connectDB().then(() => console.log("Connected to database!"))

app.listen(3001, () => {
    console.log('Server is up and running ⚡')
});

