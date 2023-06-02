const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({ title: "NASA Photos" })
})

router.use("/photos", require("./photo.routes"))
router.use("/cameras", require("./camera.routes"))
router.use("/auth", require("./auth.routes"))

module.exports = router
