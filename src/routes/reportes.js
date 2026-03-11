const express = require("express");
const router = express.Router();

const reporteController = require("../controllers/reporteController");
const auth = require("../middlewares/auth");

// http://localhost:3000/api/reportes/getAllReports
router.get("/getAllReports", auth, reporteController.getReportes);

router.post("/createReports", auth, reporteController.createReportes);

module.exports = router;
