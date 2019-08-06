import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [selectedCelebrity, setSelectedCelebrity] = useState(null);
  const [search, setSearch] = useState("");

  // useEffect with `[]` as a 2nd parameter is triggered only after the 1strender
  useEffect(() => {
    // The for loop is doing a "ten times" API calls
    // every page displays 20 actors
    for (let page = 1; page <= 10; page++) {
      axios
        .get(
          "https://api.themoviedb.org/3/person/popular?page=2&api_key=91b4381e0fc54ccc2a83e45dc39f5fad"
        )
        .then(response => {
          // Before iteration 3.3 and 3.4
          // setCelebrities(response.data.results);
          // The following syntax, sometimes, is not working
          // setCelebrities([...celebrities, ...response.data.results]);
          // So we change the syntax, using a function
          setCelebrities(celebrities => [
            ...celebrities,
            ...response.data.results
          ]);
        });
    }
  }, []);

  function handleClickCelebrity(celebrity) {
    setSelectedCelebrity(celebrity);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <h1>Celebrities</h1>
      <input
        type="text"
        placeholder="Search for celebrity..."
        value={search}
        onChange={handleChange}
      />
      {/* <pre>{JSON.stringify(selectedCelebrity, null, 2)}</pre> */}
      <div className="celebrities-panel">
        <table>
          <tbody>
            {celebrities
            .filter(c => c.name.toUpperCase().includes(search.toUpperCase()))
            .map(c => (
              <tr key={c.id} onClick={() => handleClickCelebrity(c)}>
                <td>
                  <img
                    className="thumbnail"
                    src={"https://image.tmdb.org/t/p/w185" + c.profile_path}
                    alt=""
                  />
                </td>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <pre>{JSON.stringify(celebrities, null, 2)}</pre> */}
        <div className="celebrity-detail">
          {selectedCelebrity && (
            <div>
              <h1>{selectedCelebrity.name}</h1>
              <img
                src={
                  "https://image.tmdb.org/t/p/w185" +
                  selectedCelebrity.profile_path
                }
                alt=""
              />
              <ul>
                {selectedCelebrity.known_for.map(movie => (
                  <li key={movie.id}>{movie.title || movie.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
