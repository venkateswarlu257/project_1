import express from "express"
import { loginUser,registerUser,userProfile,GetUser,UpdateUser,DeleteUser } from "../controllers/userController.js"
import authMiddleware from "../middleware/auth.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get('/userProfile',authMiddleware,userProfile)
userRouter.get('/users/:id?',GetUser)
userRouter.post('/updateuser/:id',UpdateUser)
userRouter.delete('/deleteuser/:id',DeleteUser)

export default userRouter; 