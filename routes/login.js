import express from "express";
import PromoController from "../controllers/LoginController.js";
import LoginController from "../controllers/LoginController.js";

const router = express.Router();

router.get("/logins", LoginController.index);
router.post("/logins", LoginController.storeLogin);
// router.put('/logins/:id', LoginController.updatePromo)
router.delete("/logins/:id", LoginController.deleteLogin);

export default router;
