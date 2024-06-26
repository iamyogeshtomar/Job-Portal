import jwt from "jsonwebtoken"
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import Candidate from "../models/candidateSchema.js"
import { generateToken } from "../middlewares/tokenGenerator.js"
import Company from "../models/companySchema.js"

// registering the candidate
export const registerCandidate = expressAsyncHandler(async (req, res, next) => {
    const { name, email, phone, institute, password } = req.body
    if (!name || !email || !phone || !institute || !password) {
        res.status(400)
        throw new Error("Please enter all the fields")
    }
    const candidateExist = await Candidate.findOne({ email })
    if (candidateExist) {
        res.status(400)
        throw new Error("User already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const candidate = await Candidate.create({
        name,
        email,
        phone,
        institute,
        password: hashedPassword
    })
    if (!candidate) {
        res.status(400)
        throw new Error("Invalid Data")
    }
    else {
        res.status(201).json({
            _id: candidate._id,
            name: candidate.name,
            email: candidate.email,
            phone: candidate.phone,
            institute: candidate.institute,
            token: generateToken(candidate._id)
        })
    }
})



export const loginCandidate = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("Please enter all the fields")
    }
    const candidate = await Candidate.findOne({ email })
    if (!candidate) {
        res.status(400)
        throw new Error("User does not exist")
    }

    const checkPassword = await bcrypt.compare(password, candidate.password)

    if (!checkPassword) {
        res.status(400)
        throw new Error("wrong password !!!!")
    }

    else if (candidate && checkPassword) {
        res.status(200).json({
            _id: candidate._id,
            name: candidate.name,
            email: candidate.email,
            phone: candidate.phone,
            institute: candidate.institute,
            token: generateToken(candidate._id)
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }
})


const applyJob = expressAsyncHandler(async (req, res, next) => {
    console.log("Design UI First")
})