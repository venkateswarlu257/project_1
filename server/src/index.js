import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import ProductsModel from "./models/ProductsModel.js"
import multer from 'multer'

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();
mongoose.connect("mongodb://localhost:27017/myTestMongoDB")
    .then(() => console.log('DB connection established'))
    .catch(err => console.error('DB connection error:', err));

    const storage = multer.diskStorage({
        destination:"../client/public/Images",
        filename:(req,file,cb) => {
            return cb(null,`${Date.now()}${file.originalname}`)
        }
    })
      
      const upload = multer({ storage: storage })

    app.post('/postproducts',upload.single('image'), async (request,response) => {
        const {title,brand,price,category,description} = request.body
        let image_filename = `${request.file.filename}`;
        const newProducts = new ProductsModel({
            image:image_filename,
            title,
            brand,
            price,
            category,
            description,
        })
        try{
            await newProducts.save()
            response.status(200).send('Product Add')
    
            }catch(err){
                console.log(err)
                return response.status(500).send('internal Server Error')
            }
    })
    
    app.get('/getproducts', async (request,response) => {
           let query = {};
           let sort = {}; 
        if(request?.query?.price){
            sort.price = request.query.price === 'asc' ? 1 : -1;
        }
        if(request?.query?.category) {
            const categories = Array.isArray(request.query.category) ? request.query.category : [request.query.category];
            query.category = { $in: categories };
        }
        let Products = await ProductsModel.find(query).sort(sort);
        response.send(Products)
    })

app.listen(5000, () => {
    console.log(`Server started at http://localhost:5000`);
});