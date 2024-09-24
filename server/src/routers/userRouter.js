import express from "express"
import { loginUser,registerUser,GetUser,UpdateUser,DeleteUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get('/users/:createdBy?',GetUser)
userRouter.post('/updateuser/:id',UpdateUser)
userRouter.delete('/deleteuser/:id',DeleteUser)

export default userRouter; 