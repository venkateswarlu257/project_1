import { request } from "express";
import RegisterModel from "../models/RegisterModel.js";
import jwt from "jsonwebtoken"
import argon2 from "argon2";

import {generateToken} from '../utils/jwtUtils.js'

const createUser =  async (userData) => {
        let exist = await RegisterModel.findOne({email:userData.email})
        if(exist){
            return {message:"User Already Exist",status:200}
        }
        const hashedPassword = await argon2.hash(userData.password);
        let newUser = new RegisterModel({
            username:userData.username,
            email:userData.email,
            password:hashedPassword,
            role:userData.role,
            createdBy: userData.createdBy,
            permissions: userData.permissions 
            
        })
        const result = await newUser.save() 
        return {message:"Registered Successfully",status:200,}
}

const validateUser = async (email,password) => {
    let exist = await RegisterModel.findOne({email:email});
    if(!exist){
        return {message:'User Not Found',status:401}
    }
    const isPasswordCorrect = await argon2.verify(exist.password, password);
    if(!isPasswordCorrect){
        return {message:"Password Not Match",status:401}
    }
    const jwtToken =  generateToken(exist)
    return{jwtToken,status: 200}
}

const userlist = async(request) => {
    let query = {};
    if(request?.query?.createdBy) {
        const createdBy = Array.isArray(request.query.createdBy) ? request.query.createdBy : [request.query.createdBy];
        query.createdBy = { $in: createdBy };
    }
    let userDetails = await RegisterModel.find(query)
    return userDetails
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
                // password: md5(data.password),
                permissions: data.permissions

            }
        );
        return {message:"update Successfully",status:200,};
    } catch (error) {
        throw new Error('Failed to update user');
    } 
}

const userDelete = async (id) => {
    try {
        const result = await RegisterModel.deleteOne({_id:id})
        return {message:"Delete Successfully"}
    } catch (error) {
        throw new Error('Failed to Delete user');
    } 
}

export {createUser, validateUser, userlist, grtProfile, userUpdate,userDelete}

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