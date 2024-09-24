import RegisterModel from "../models/RegisterModel.js";
import { createUser,validateUser,userlist,userUpdate,userDelete } from "../services/userServices.js";

const registerUser = async (request,response) => {
    try{
        const result = await createUser(request.body)
        return response.send(result)
    }catch(err){
        response.send(err)
    }
}

const loginUser = async (request,response) => {
    try{
        const {email,password} = request.body;
        const result = await validateUser(email,password)
        if (result.status !== 200) {
            return response.status(result.status).send({ message: result.message });
        }
        return response.send(result)
    }
    catch(message){
        response.send(message);
    }
}

const GetUser = async (request,response) => {
    const result = await userlist(request)
    return response.send(result)
}

const UpdateUser = async(request,response) => {
    try {
        const { id } = request.params;
        const result = await userUpdate(id, request.body);
        response.status(result)
    } catch (error) {
        response.status(500).send({ message: 'Error updating user', error: error.message });
    }
}

const DeleteUser = async (request,response) => {
    try {
        const { id } = request.params;
        const result = await userDelete(id);
        response.status(result);
    } catch (error) {
        response.status(500).send({ message: 'Error updating user', error: error.message });
    }
} 
 
export {registerUser,loginUser,GetUser,UpdateUser,DeleteUser}