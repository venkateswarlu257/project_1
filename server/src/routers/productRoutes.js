import express from "express"
import { upload, postProduct ,getProducts } from '../controllers/productsController.js'

const productRouter = express.Router()

productRouter.post("/postproducts",upload.single('image'),postProduct)
productRouter.get("/getproducts",getProducts)

export default productRouter