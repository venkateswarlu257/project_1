import ProductsModel from "../models/ProductsModel.js"

const createProducts =  async (image_filename,data) => {
        const newProducts = new ProductsModel({
            image:image_filename,
            title:data.title,
            brand:data.brand,
            price:data.price,
            category:data.category,
            description:data.description,
        })
        await newProducts.save()

}

const productsGet = async (request) => {
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
    return Products
}

export {createProducts,productsGet}