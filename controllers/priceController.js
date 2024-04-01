import { Price } from "../models/price";

export const getPrices = async (req, res) => {
  try {
    const prices = await Price.findAll();
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: prices,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const getPrice = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const price = await Price.findByPk(id);
    if (!price) {
      return res.status(404).json({
        status: 404,
        message: "Price not found",
        data: price,
      });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: price,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const createPrice = async (req, res) => {
  try {
    const price = await Price.create(req.body);
    res.status(200).json({
      status: 200,
      message: "Create successfully",
      data: price,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export const updatePrice = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
        data: price,
      });
    }
    const price = await Price.findByPk(id);
    if (!price) {
      return res.status(404).json({
        status: 404,
        message: "Price not found",
        data: price,
      });
    }
    await price.update(req.body);
    res.status(200).json({
      status: 200,
      message: "Update successfully",
      data: price,
    });
  } catch (error) {
    res.status(400).json({
      status: 200,
      message: error.message,
    });
  }
};

export const deletePrice = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
        data: price,
      });
    }
    const price = await Price.findByPk(id);
    if (!price) {
      return res.status(404).json({
        status: 404,
        message: "Price not found",
        data: price,
      });
    }
    await price.destroy();
    res.status(200).json({
      status: 200,
      message: "Delete successfully",
      data: price,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};
