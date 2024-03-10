const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.get("/viewjobseekers",admincontroller.viewjobseekers)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.delete("/deletejobseeker/:email",admincontroller.deletejobseeker)

module.exports = adminrouter