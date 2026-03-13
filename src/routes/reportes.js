/**
 * Incident Reports Routes
 * Layer: Network
 * * These routes handle the citizen reports. 
 * Note: 'auth' middleware is applied to protect these endpoints.
 */
const express = require("express");
const router = express.Router();

// Logic Layer Import
const reporteController = require("../controllers/reporteControllers"); // Corrected plural

// Middleware Layer Import (Security)
const auth = require("../middlewares/auth");

/**
 * GET: /api/reportes/getAllReports
 * Access: PRIVATE (Requires valid JWT in Header)
 * Description: Retrieves all reports stored in MongoDB.
 */
router.get("/getAllReports", auth, reporteController.getReportes);

/**
 * POST: /api/reportes/createReports
 * Access: PRIVATE (Requires valid JWT in Header)
 * Description: Submits a new report and triggers the prioritization logic.
 */
router.post("/createReports", auth, reporteController.createReportes);

module.exports = router;
