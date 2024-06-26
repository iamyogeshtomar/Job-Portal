import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Company from "../models/companySchema.js";

export const validateCompany = expressAsyncHandler(async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        const token = req.headers.authorization.split(" ")[1]
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
            let companyUser = await Company.findById(decodedToken.id).select("-password")
            req.user = companyUser

            if (!req.user) {
                res.status(401)
                throw new Error("Not authorized, token failed")
            }
            companyUser = {
                ...companyUser.toObject(),
                type: Company
            }
            req.user = companyUser;
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Invalid token")
        }
    }
    else {
        res.status(401)
        throw new Error("No User token found")
    }
})