import express from "express";
const router = express.Router()

import { registerCandidate, loginCandidate } from "../controllers/candidateController.js";

router.post("/signup", registerCandidate)
router.post("/login", loginCandidate)

export default router