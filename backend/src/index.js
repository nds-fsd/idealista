const express = require('express');
const {connectDB} =  require("./mongo/connection");
const router = require('./routers/index.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);

connectDB().then(() => console.log("Connected to database!"))

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port} ⚡`);
});
