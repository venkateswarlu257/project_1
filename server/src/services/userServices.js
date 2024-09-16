import { request } from "express";
import RegisterModel from "../models/RegisterModel.js";
import jwt from "jsonwebtoken"
import md5 from "md5"

import {generateToken} from '../utils/jwtUtils.js'

const createUser =  async (userData) => {
        let exist = await RegisterModel.findOne({email:userData.email})
        if(exist){
            return response.status(400).send('User Already Exist')
        }
        if(userData.password !== userData.confirmpassword){
            return response.status(400).send('Password are not matching')
        }
        let newUser = new RegisterModel({
            username:userData.username,
            email:userData.email,
            password:md5(userData.password),
            role:userData.role,
            createdBy: userData.createdBy,
            permissions: userData.permissions 
            
        })
        await newUser.save()  
}

const validateUser = async (email,password) => {
    let exist = await RegisterModel.findOne({email:email});
    if(!exist){
        return response.status(400).send('User Not Found')
    }
    if(exist.password !== md5(password)){
        return response.status(400).send(`Password Not Match`)
    }
    // let payload = {
    //     id : exist?.id,
    //     username:exist?.username,
    //     email:exist?.email,
    //     // role:exist?.role
    // }
    // return jwt.sign(payload,"MY_SECRET_TOKEN")
    return generateToken(exist)
}

const grtProfile = async (data) => {
    let jwtToken
    if (data !== undefined) {
        jwtToken = data.split(" ")[1];
    }
    const decoded = jwt.verify(jwtToken, "MY_SECRET_TOKEN");  
    const username = decoded
    return username
}

const userUpdate = async (id,data) => {
    try {
        const result = await RegisterModel.updateOne(
            { _id: id },
            {
                username: data.username,
                email: data.email,
                password: md5(data.password)
            }
        );
        return result;
    } catch (error) {
        throw new Error('Failed to update user');
    } 
}

const userDelete = async (id) => {
    try {
        const result = await RegisterModel.deleteOne({_id:id})
        return result
    } catch (error) {
        throw new Error('Failed to Delete user');
    } 
}

export {createUser, validateUser, grtProfile, userUpdate,userDelete}

// 01JA2401
// 01FE2402
// 01MR2403
// 01AP2404
// 01MY2405
// 01JN2406
// 01JY2407
// 01AU2408
// 01SE2409
// 01OC2410
// 01NO2411
// 01DE2412