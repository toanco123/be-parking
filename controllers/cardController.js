import { Card } from "../models/card";

const getCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

// get card
const getCard = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: "ID must be a number",
      });
    }
    const card = await Card.findByPk(id);
    if (!card) {
      return res.status(404).json({
        status: 404,
        message: "Card not found",
        data: card,
      });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully",
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

// create card
const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(200).json({
      status: 200,
      message: "Create successfully",
      data: card,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

// update card
const updateCard = async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Card.findByPk(id);
    if (!card) {
      return res.status(404).json({
        status: 404,
        message: "Card not found",
        data: card,
      });
    }
    await card.update(req.body);
    res.status(200).json({
      status: 200,
      message: "Update successfully",
      data: card,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

//delete card
const deleteCard = async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Card.findByPk(id);
    if (!card) {
      res.status(404).json({
        status: 404,
        message: "Card not found",
        data: card,
      });
    }
    await card.destroy();
    res.status(200).json({
      status: 200,
      message: "Card deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export { getCards, getCard, createCard, updateCard, deleteCard };
