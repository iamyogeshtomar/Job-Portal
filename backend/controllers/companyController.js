import jwt from "jsonwebtoken"
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import Company from "../models/companySchema.js"
import jobSchema from "../models/jobSchema.js"
import { generateToken } from "../middlewares/tokenGenerator.js"

// register company
export const registerCompany = expressAsyncHandler(async (req, res, next) => {
    const { name, website, email, password } = req.body

    // steps before creation
    // Validation
    if (!name || !website || !email || !password) {
        res.status(400)
        throw new Error("Please enter all the fields")
    }
    // Checking if company already exists
    const companyExist = await Company.findOne({ email })

    if (companyExist) {
        res.status(400)
        throw new Error("Company already exists")
    }
    // steps to register company
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Check for Database validations
    const company = await Company.create({
        name,
        website,
        email,
        password: hashedPassword
    })

    // this only gets triggered when DB validation fails
    if (!company) {
        res.status(400)
        throw new Error("Invalid User Data")
    }
    else {
        res.status(201)
        res.json({
            _id: company._id,
            name: company.name,
            website: company.website,
            token: generateToken(company._id)
        })
    }
})


// Login company account
export const loginCompany = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("Please enter all the fields")
    }
    // validate company
    const company = await Company.findOne({ email })
    if (company && (await bcrypt.compare(password, company.password))) {
        res.status(200).json({
            _id: company._id,
            name: company.name,
            website: company.website,
            email: company.email,
            token: generateToken(company._id)
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})


// Company posting a new job
export const postJob = expressAsyncHandler(async (req, res, next) => {
    const { roleName, CTC, description, companyName, skillsRequired, location } = req.body
    const currentCompany = await Company.findById(companyName)
    if (!currentCompany) {
        res.status(401)
        throw new Error("Authorization Failed")
    }
    const currentJob = await jobSchema.create({
        roleName,
        CTC,
        description,
        companyName,
        skillsRequired,
        location
    })
    res.status(201).json({
        currentJob,
        message: "Job posted successfully"
    })
})