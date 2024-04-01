import { Router } from "express";
const router = Router();
import {
  getAdmins,
  registerAdmin,
  loginAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmin,
} from "../controllers/adminController";

router.get("/", getAdmins);
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);
router.get("/:id", getAdmin);

export default router;
