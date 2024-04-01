import { ParkingLot } from "../models/parkingLot";

export const getParkingLots = async (req, res) => {
  try {
    const parkingLots = await ParkingLot.findAll();
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: parkingLots,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const getParkingLot = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const parkingLot = await ParkingLot.findByPk(id);
    if (!parkingLot) {
      return res.status(404).json({
        status: 404,
        message: "ParkingLot not found",
        data: parkingLot,
      });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: parkingLot,
    });
  } catch (error) {
    res.status(500).json({
      status: 200,
      message: error.message,
    });
  }
};

export const createParkingLot = async (req, res) => {
  try {
    const parkingLot = await ParkingLot.create(req.body);
    res.status(200).json({
      status: 200,
      message: "Create successfully",
      data: parkingLot,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export const updateParkingLot = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const parkingLot = await ParkingLot.findByPk(id);
    if (!parkingLot) {
      return res.status(404).json({
        status: 404,
        message: "ParkingLot not found",
        data: parkingLot,
      });
    }
    await parkingLot.update(req.body);
    res.status(200).json({
      status: 200,
      message: "Update successfully",
      data: parkingLot,
    });
  } catch (error) {
    res.status(400).json({
      status: 200,
      message: error.message,
    });
  }
};

export const deleteParkingLot = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const parkingLot = await ParkingLot.findByPk(id);
    if (!parkingLot) {
      return res.status(404).json({
        status: 404,
        message: "ParkingLot not found",
        data: parkingLot,
      });
    }
    await parkingLot.destroy();
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
