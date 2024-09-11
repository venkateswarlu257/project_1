import mongoose from 'mongoose'

const ProductsSchema = new mongoose.Schema({
    image:{type:String,required:true},
    title: {type: String, required: true,},
    brand: {type: String, required: true,},
    price: {type: Number, required: true,},
    category: {type: String, required: true,},
    description: {type: String, required: true}

})

const ProductsModel = mongoose.model('Products_1',ProductsSchema)

export default ProductsModel