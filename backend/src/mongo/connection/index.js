const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let dbUrl = process.env.MONGO_URL;

let mongodb;

exports.connectDB = async () => {
    mongoose.set("strictQuery", false);

    try {
        if (process.env.NODE_ENV === "test") {
            mongodb = await MongoMemoryServer.create();
            dbUrl = mongodb.getUri();
            console.log("MongoDB-Test:", dbUrl);
        }

        await mongoose.connect(dbUrl);
        const mongo = mongoose.connection;
        mongo.on("error", (error) => console.error(error));
    } catch (e) {
        console.log(e);
    }
}


exports.disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        if (mongodb) {
            await mongodb.stop();
        }
    } catch (err) {
        console.log(err);
    }
};

