import express, { response } from 'express';
import cors from 'cors';
import DBconnection from './config/db.js';
import userRouter from "./routers/userRouter.js"
import productRouter from './routers/productRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

DBconnection()

    app.use(userRouter)
    app.use(productRouter)

app.listen(5000, () => {
    console.log(`Server started at http://localhost:5000`);
});