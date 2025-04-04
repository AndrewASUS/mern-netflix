import express from "express"
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/Login", login)
router.post("/Logout", logout)

router.get("/authCheck", protectRoute, authCheck)


export default router


