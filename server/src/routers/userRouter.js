import express from "express"
import { LoginUser,RegisterUser,UserProfile,GetUser,UpdateUser,DeleteUser } from "../controllers/userController.js"
import authMiddleware from "../middleware/auth.js"

const userRouter = express.Router()

userRouter.post("/register",RegisterUser)
userRouter.post("/login",LoginUser)
userRouter.get('/userProfile',authMiddleware,UserProfile)
userRouter.get('/users/:id?',GetUser)
userRouter.post('/updateuser/:id',UpdateUser)
userRouter.delete('/deleteuser/:id',DeleteUser)

export default userRouter;