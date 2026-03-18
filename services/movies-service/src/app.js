const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://mongo:27017/movies_db")

const Movie = mongoose.model("Movie", {
  title: String,
  genre: String
})

app.post("/movies", async (req, res) => {
  const m = new Movie(req.body)
  await m.save()
  res.json(m)
})

app.get("/movies", async (req, res) => {
  const data = await Movie.find()
  res.json(data)
})

app.listen(3000)
