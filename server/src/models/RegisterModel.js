import mongoose from 'mongoose'

const RegisterSchema = new mongoose.Schema({
    username: {type: String, required: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true,},
    role:{type: String, required: true,}
})

const RegisterModel = mongoose.model('Registeruser',RegisterSchema)

export default RegisterModel