import e from "express";
import RegisterModel from "../models/RegisterModel.js";
import jwt from "jsonwebtoken"
import md5 from "md5"

const RegisterUser =  async (request, response) => {
    try{
        const {username, email,password,confirmpassword} = request.body;
        let exist = await RegisterModel.findOne({email})
        if(exist){
            return response.status(400).send('User Already Exist')
        }
        if(password !== confirmpassword){
            return response.status(400).send('Password are not matching')
        }
        let newUser = new RegisterModel({
            username,
            email,
            password:md5(password),
            // confirmpassword:md5(confirmpassword),
        })
        await newUser.save()
        response.status(200).send('Registered Successfully')

    }catch(err){
        console.log(err)
        return response.status(500).send('internal Server Error')
    }
}

const LoginUser = async (request,response) => {
    try{
        const {email,password} = request.body;
        let exist = await RegisterModel.findOne({email:email});
        if(!exist){
            return response.status(400).send('User Not Found')
        }
        if(exist.password !== md5(password)){
            return response.status(400).send(`Password Not Match`)
        }
        let payload = {
            id : exist?.id,
            username:exist?.username,
            email:exist?.email
        }
        const jwtToken = jwt.sign(payload,'MY_SECRET_TOKEN')
        response.send({jwtToken})
    }
    catch(err){
        console.log(err)
        return response.status(500).send('Server Error')
    }
}

 const UserProfile = async(request,response) => {
    let jwtToken
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
        jwtToken = authHeader.split(" ")[1];
    }
    const decoded = jwt.verify(jwtToken, "MY_SECRET_TOKEN");  
    const username = decoded
    response.send(username);
}

const GetUser = async (request,response) => {
    console.log('request', request.params)
    let userDetails;
    if(request?.params?.id) {
        userDetails = await RegisterModel.findOne({_id:request?.params?.id})
    } else {
        userDetails = await RegisterModel.find()
    }
    response.send(userDetails)
}

const UpdateUser = async(request,response) => {
    const result = await RegisterModel.updateOne({_id:request?.params?.id},{
        username: request.body.username,
        email: request.body.email,
        password: md5(request.body.password)
    })
    response.send(result)
}

const DeleteUser = async (request,response) => {
    const result = await RegisterModel.deleteOne({_id:request?.params?.id})
    response.send(result)
}
 
export {LoginUser,RegisterUser,UserProfile,GetUser,UpdateUser,DeleteUser}