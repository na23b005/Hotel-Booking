import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
const router = express.Router();

//Create
router.post("/:hotelid",verifyAdmin,createRoom)
//Update
router.put("/:id", verifyAdmin,updateRoom)
router.put("/availability/:id", updateRoomAvailability)
//Delete
router.delete("/:id/:hotelid", verifyAdmin,deleteRoom)
//Get
router.get("/:id", getRoom)
//Get all
router.get("/", getRooms)

export default router;
