const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://mongo:27017/showtimes_db")

const Showtime = mongoose.model("Showtime", {
  movieId: String,
  time: String
})

app.post("/showtimes", async (req, res) => {
  const s = new Showtime(req.body)
  await s.save()
  res.json(s)
})

app.get("/showtimes", async (req, res) => {
  const data = await Showtime.find()
  res.json(data)
})

app.listen(3000)
