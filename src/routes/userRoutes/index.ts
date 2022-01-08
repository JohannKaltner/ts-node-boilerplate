import express from "express";
import {
    authenticateUser
} from "../../controllers/userControllers/";

const userRouter = express.Router();

userRouter.post('/auth', authenticateUser)

export default userRouter