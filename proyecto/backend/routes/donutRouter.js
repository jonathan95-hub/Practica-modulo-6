const express = require("express");
const router = express.Router();

const {
  createDonuts,
  getDonuts,
  editDonuts,
  deleteDonuts
} = require("../controllers/donutsController");

router.post("/create", createDonuts);
router.get("/list", getDonuts);
router.patch("/list/:idDonuts", editDonuts);
router.delete("/list/:idDonuts", deleteDonuts);

module.exports = router;
