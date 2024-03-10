const jobseekercontroller = require("../controllers/jobseekercontroller")

const express = require("express")
const jobseekerrouter = express.Router()

// job seekeer routes
jobseekerrouter.post("/insertjobseeker",jobseekercontroller.insertjobseeker)
jobseekerrouter.post("/checkjobseekerlogin",jobseekercontroller.checkjobseekerlogin)


module.exports = jobseekerrouter