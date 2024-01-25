const express = require("express");
const {
  fetchOrdersByUser,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/Order");

const router = express.Router();

// /orders is already added in base path
router
  .post("/", createOrder)
  .get("/", fetchOrdersByUser)
  .delete("/:id", deleteOrder)
  .patch("/:id", updateOrder);

exports.router = router;
