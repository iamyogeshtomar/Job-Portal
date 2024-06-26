import jwt from "jsonwebtoken"

export const generateToken = (id) => jwt.sign(
    { id },
    process.env.SECRET_KEY,
    { expiresIn: "30d" }
)
