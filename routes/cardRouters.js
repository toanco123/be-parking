import { Router } from "express";
import {
  createCard,
  deleteCard,
  getCard,
  getCards,
  updateCard,
} from "../controllers/cardController";
const router = Router();

router.get("/", getCards);
router.post("/", createCard);
router.put("/:id", updateCard);
router.get("/:id", getCard);
router.delete("/:id", deleteCard);

export default router;
