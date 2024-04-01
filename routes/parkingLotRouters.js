import { Router } from "express";
import {
  createParkingLot,
  deleteParkingLot,
  getParkingLot,
  getParkingLots,
  updateParkingLot,
} from "../controllers/parkingLotController";
const router = Router();

router.get("/", getParkingLots);
router.post("/", createParkingLot);
router.put("/:id", updateParkingLot);
router.get("/:id", getParkingLot);
router.delete("/:id", deleteParkingLot);

export default router;
