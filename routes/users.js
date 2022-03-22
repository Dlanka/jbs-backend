import express from "express";
import { v4 as uuidv4 } from "uuid";

import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.js";

const router = express.Router();


// Get All users
router.get("/", getUsers);

// Add new user
router.post("/", createUser);

// Get user by id
router.get("/:id", getUserById);

// Delete user by id
router.delete("/:id", deleteUserById);

// update user by id
router.patch("/:id", updateUserById);

export default router;
