import mongoose, { Schema, model } from "mongoose"

const jobSchema = Schema({
    roleName: {
        type: String,
        required: [true, "Please enter the role of the job"],
    },
    CTC: {
        type: Number,
        required: [true, "Please enter the CTC you wish to offer"],
    },
    description: {
        type: String,
        required: [true, "Please enter the role of the job"],
    },
    companyName: {
        type: Schema.Types.ObjectId,
        ref: "Company",
    },
    skillsRequired: [{
        type: String,
        required: [true, "Please enter the skills required for the job"],
    }],
    location: {
        type: String,
        required: [true, "Please enter the location of the job"],
    },
    usersApplied: [{
        type: Schema.Types.ObjectId,
        ref: "Candidate",
    }]
},
    { timestamps: true })

export default model("Job", jobSchema)