import { useEffect, useState } from "react"

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then(res => res.json())
      .then(setMovies)
  }, [])

  return (
    <div>
      <h1>Cinema</h1>
      {movies.map(m => (
        <div key={m._id}>{m.title}</div>
      ))}
    </div>
  )
}

export default App
