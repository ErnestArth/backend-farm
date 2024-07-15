import { Router } from "express";
import { login, logout, register, verifyAccount } from "../controllers/controllers.auth";

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.post("/verify-account", verifyAccount)
router.post("/logout", logout)

export default router