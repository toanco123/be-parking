import { ParkingRecord } from "../models/parkingRecord";

export const getParkingRecords = async (req, res) => {
  try {
    const parkingRecords = await ParkingRecord.findAll();
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: parkingRecords,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const getParkingRecord = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const parkingRecord = await ParkingRecord.findByPk(id);
    if (!parkingRecord) {
      return res.status(404).json({
        status: 404,
        message: "ParkingRecord not found",
        data: parkingRecord,
      });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: parkingRecord,
    });
  } catch (error) {
    res.status(500).json({
      status: 200,
      message: error.message,
    });
  }
};

export const createParkingRecord = async (req, res) => {
  try {
    const parkingRecord = await ParkingRecord.create(req.body);
    res.status(200).json({
      status: 200,
      message: "Create successfully",
      data: parkingRecord,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export const updateParkingRecord = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const parkingRecord = await ParkingRecord.findByPk(id);
    if (!parkingRecord) {
      return res.status(404).json({
        status: 404,
        message: "ParkingRecord not found",
        data: parkingRecord,
      });
    }
    await parkingRecord.update(req.body);
    res.status(200).json({
      status: 200,
      message: "Update successfully",
      data: parkingRecord,
    });
  } catch (error) {
    res.status(400).json({
      status: 200,
      message: error.message,
    });
  }
};

export const deleteParkingRecord = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const parkingRecord = await ParkingRecord.findByPk(id);
    if (!parkingRecord) {
      return res.status(404).json({
        status: 404,
        message: "ParkingRecord not found",
        data: parkingRecord,
      });
    }
    await parkingRecord.destroy();
    res.status(200).json({
      status: 200,
      message: "Delete successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};
