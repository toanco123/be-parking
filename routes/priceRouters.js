import { Router } from "express";
import {
  createPrice,
  deletePrice,
  getPrice,
  getPrices,
  updatePrice,
} from "../controllers/priceController";
const router = Router();

router.get("/", getPrices);
router.post("/", createPrice);
router.get("/:id", getPrice);
router.put("/:id", updatePrice);
router.delete("/:id", deletePrice);

export default router;
