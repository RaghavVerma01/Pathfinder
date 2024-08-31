import {connect,disconnect} from 'mongoose';


async function connectDatabase(){
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to database");
    }
}

async function disconnectDatabase(){
    try {
        await disconnect()
    } catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from database");
    }
}

export {connectDatabase,disconnectDatabase};