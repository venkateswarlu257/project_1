import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DBconnection = () => {
    mongoose.connect("mongodb://localhost:27017/myTestMongoDB")
    .then(() => console.log('DB connection established'))
    .catch(err => console.error('DB connection error:', err));
}


export default DBconnection