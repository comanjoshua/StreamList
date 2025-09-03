// src/MovieSearch.js
import React, { useState } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "68f228097195c8c3bd263542cb8238b7"; // your TMDB key
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200"; // poster size

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setResults(data.results);
        setError(null);
      } else {
        setResults([]);
        setError("No results found");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching movies");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {results.map((movie) => (
          <div
            key={movie.id}
            style={{
              margin: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  background: "#ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
              >
                No Image
              </div>
            )}
            <p style={{ marginTop: "10px" }}>
              <strong>{movie.title}</strong>{" "}
              {movie.release_date && `(${movie.release_date.slice(0, 4)})`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
