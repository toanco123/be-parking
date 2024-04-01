import { Router } from "express";
import {
  createParkingRecord,
  deleteParkingRecord,
  getParkingRecord,
  getParkingRecords,
  updateParkingRecord,
} from "../controllers/parkingRecordController";
const router = Router();

router.get("/", getParkingRecords);
router.post("/", createParkingRecord);
router.put("/:id", updateParkingRecord);
router.get("/:id", getParkingRecord);
router.delete("/:id", deleteParkingRecord);

export default router;
