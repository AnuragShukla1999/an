import mongoose from "mongoose";

const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log("Database is connected.");
        })
        .catch((e) => {
            console.log(e)
        })
    } catch (error) {
        console.log(error);
    }
}

export default dbConnection;