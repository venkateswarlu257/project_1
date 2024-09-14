import RegisterModel from "../models/RegisterModel.js";
import { createUser,validateUser,grtProfile,userUpdate,userDelete } from "../services/userServices.js";

const registerUser = async (request,response) => {
    try{
        const newUser = await createUser(request.body)
        response.status(200).send('Registered Successfully')
    }catch(err){
        response.send(err)
    }
}

const loginUser = async (request,response) => {
    try{
        const {email,password} = request.body;
        const jwtToken = await validateUser(email,password)
        if(!jwtToken){
            response.send('error')
        }
        response.send({jwtToken})
    }
    catch(message){
        response.status(500).send({ message: 'Error updating user', error: error.message });
    }
}

 const userProfile = async(request,response) => {
    try{
        const authHeader = await grtProfile(request.headers["authorization"])
        response.send(authHeader);
    }
    catch(message){
        response.status(500).send({ message: 'Error updating user', error: error.message });
    }

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
    try {
        const { id } = request.params;
        const results = await userUpdate(id, request.body);
        response.status(200).send({ message: 'User updated successfully', data: results });
    } catch (error) {
        response.status(500).send({ message: 'Error updating user', error: error.message });
    }
}

const DeleteUser = async (request,response) => {
    try {
        const { id } = request.params;
        const results = await userDelete(id);
        response.status(200).send({ message: 'User Deletr successfully', data: results });
    } catch (error) {
        response.status(500).send({ message: 'Error updating user', error: error.message });
    }
} 
 
export {registerUser,loginUser,userProfile,GetUser,UpdateUser,DeleteUser}