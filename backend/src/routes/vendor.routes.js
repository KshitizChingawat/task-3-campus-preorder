import express from "express";
import { createVendor, getCampusVendors } from "../controllers/vendor.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createVendor);
router.get("/", protect, getCampusVendors);

export default router;
