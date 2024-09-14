import mongoose from 'mongoose'

const RegisterSchema = new mongoose.Schema({
    username: {type: String, required: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true,},
    role: {type:String,required:true},
    createdBy: {type: String, required: true},
    permissions: {
        products: {
            R: {type:Number, required: true},
            W: {type:Number, required: true},
            D: {type:Number, required: true},
        },
        orders: {
            R: {type:Number, required: true},
            W: {type:Number, required: true},
            D: {type:Number, required: true},
        },
        employee: {
            R: {type:Number, required: true},
            W: {type:Number, required: true},
            D: {type:Number, required: true},
        },
        prodCategory: {
            R: {type:Number, required: true},
            W: {type:Number, required: true},
            D: {type:Number, required: true},
        },
        prodSubCategory: {
            R: {type:Number, required: true},
            W: {type:Number, required: true},
            D: {type:Number, required: true},
        },
        
    },
    createdAt: {type: String, required: true},
    updateAt: {type: String, required: true}
})

const RegisterModel = mongoose.model('Registeruser',RegisterSchema)

export default RegisterModel