import multer from 'multer'


import { createProducts,productsGet } from "../services/productServices.js";


const storage = multer.diskStorage({
    destination:"../client/src/Images",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
  
const upload = multer({ storage: storage })

const postProduct = async (request,response) => {
        const image_filename = `${request.file.filename}`;
        const result = await createProducts(request.body)
        response.send('Product Add')
}
const getProducts = async (request,response) => {
    try{
        const result = await productsGet(request)
        response.send(result);
    } catch (error) {
        response.send({ message: 'Error updating user', error: error.message });
    }
}

export { upload, postProduct,getProducts }