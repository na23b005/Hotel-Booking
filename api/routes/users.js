import express from "express";
import User from "../models/User.js";
import createError from "../utils/error.js"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, you are logged in!")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can do whatever you want")
// })
//Update
router.put("/:id", verifyUser,updateUser)
//Delete
router.delete("/:id", verifyUser,deleteUser)
//Get
router.get("/:id", verifyUser,getUser)
//Get all
router.get("/", verifyAdmin,getUsers)

export default router;
