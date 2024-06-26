import express from "express"
const router = express.Router()

import { registerCompany, loginCompany, postJob } from "../controllers/companyController.js"
import { validateCompany } from "../middlewares/companyTokenValidation.js"

router.post("/register", registerCompany)
router.post("/login", loginCompany)
router.post("/postJob", validateCompany, postJob)

export default router;