import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URI = 'mongodb://localhost:27017/CarShop';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_DB_URL
    || MONGO_DB_URI,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;