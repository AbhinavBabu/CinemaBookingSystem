const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://mongo:27017/bookings_db")

const Booking = mongoose.model("Booking", {
  showtimeId: String,
  user: String
})

app.post("/bookings", async (req, res) => {
  const b = new Booking(req.body)
  await b.save()
  res.json(b)
})

app.get("/bookings", async (req, res) => {
  const data = await Booking.find()
  res.json(data)
})

app.listen(3000)
