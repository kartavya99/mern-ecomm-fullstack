const express = require("express");
const { fetchBrands } = require("../controller/Brand");

const router = express.Router();

// /brands is already added in base path
router.get("/", fetchBrands);

exports.router = router;
