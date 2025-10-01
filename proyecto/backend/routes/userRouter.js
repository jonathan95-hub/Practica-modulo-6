const express = require('express');
const router = express.Router();

const {addToFav, deleteToFav} = require("../controllers/userController");

router.post("/:idDonuts",  addToFav)
router.delete("/:idDonuts",  deleteToFav)

module.exports = router