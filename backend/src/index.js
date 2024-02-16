const express = require('express');
const {connectDB} =  require("./mongo/connection");
const router = require('./routers/index.js');
const cors = require('cors');

const app = express();
app.use(express.json());
const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));
app.use('/', router);

connectDB().then(() => console.log("Connected to database!"))

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port} ⚡`);
});
