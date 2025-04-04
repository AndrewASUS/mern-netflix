import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"


export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" })

  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 DAYS IN MILLISECONDS
    httpOnly: true, // MAKES SURE THIS COOKIE IS ONLY AVAILABLE VIA BROWSER, PRVENTS XXS ATTACKS CROSS-SITE SCRIPTING ATTACKS, MAKE IT NOT ACCESSIBLE BY JS
    sameSite: "strict", // PREVENTS ATTACKS CROSS-SITE REQUEST FORGERY ATTACKS
    secure: ENV_VARS.NODE_ENV !== "development",
  })

  return token
}