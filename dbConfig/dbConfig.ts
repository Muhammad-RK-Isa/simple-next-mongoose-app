import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MDB_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Successfully connected to MongoDB! Yay!');
        });

        connection.on('error', (error) => {
            console.log('Something went wrong while establishing connection with MongoDB!');
            console.log('Here what it says: ', error);
            process.exit();
        });

        connection.on('disconnected', () => {
            console.log("Disconnected from MongoDB.");
        });

    } catch (error) {
        console.dir(error);
    }
};