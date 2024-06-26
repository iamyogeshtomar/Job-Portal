import { Schema, model } from "mongoose";

const candidateSchema = Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number"],
    },
    institute: {
        type: String,
        required: [true, "Please enter your Institute name"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    }
},
    { timestamps: true })

const Candidate = model("Candidate", candidateSchema)
export default Candidate