import express from "express";
import { addMenuItem, getVendorMenu } from "../controllers/menu.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addMenuItem);
router.get("/:vendorId", protect, getVendorMenu);

export default router;
