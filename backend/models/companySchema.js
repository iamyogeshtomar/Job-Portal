import { Schema, model } from "mongoose";

const companySchema = Schema({
    name: {
        type: String,
        required: [true, "Please enter company name"],
    },
    website: {
        type: String,
        required: [true, "Please enter your company's website"],
    },
    email: {
        type: String,
        required: [true, "Please enter your company's email address"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
},
    { timestamps: true })

const Company = model("Company", companySchema)
export default Company;