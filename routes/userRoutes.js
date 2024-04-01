import { Router } from "express";
const router = Router();
import {
  createUser,
  deleteUser,
  deleteUsers,
  getUserSearch,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

router.get("/", getUserSearch);
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/", deleteUsers);
router.delete("/:id", deleteUser);

export default router;
