import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <p>Hello World</p>
        <table>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Production Year</th>
              <th>Actors</th>
              <th>Director</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Shawshank Redemption</td>
              <td>1994</td>
              <td>Tim Robbins, Morgan Freeman</td>
              <td>Frank Darabont</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>The Godfather</td>
              <td>1972</td>
              <td>Marlon Brando, Al Pacino</td>
              <td>Francis Ford Coppola</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>The Dark Knight</td>
              <td>2008</td>
              <td>Christian Bale, Heath Ledger</td>
              <td>Christopher Nolan</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>Pulp Fiction</td>
              <td>1994</td>
              <td>John Travolta, Uma Thurman</td>
              <td>Quentin Tarantino</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>Forrest Gump</td>
              <td>1994</td>
              <td>Tom Hanks, Robin Wright</td>
              <td>Robert Zemeckis</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>Inception</td>
              <td>2010</td>
              <td>Leonardo DiCaprio, Joseph Gordon-Levitt</td>
              <td>Christopher Nolan</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>Fight Club</td>
              <td>1999</td>
              <td>Brad Pitt, Edward Norton</td>
              <td>David Fincher</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>The Matrix</td>
              <td>1999</td>
              <td>Keanu Reeves, Laurence Fishburne</td>
              <td>Lana Wachowski, Lilly Wachowski</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>Goodfellas</td>
              <td>1990</td>
              <td>Robert De Niro, Ray Liotta</td>
              <td>Martin Scorsese</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
            <tr>
              <td>The Lord of the Rings: The Return of the King</td>
              <td>2003</td>
              <td>Elijah Wood, Viggo Mortensen</td>
              <td>Peter Jackson</td>
              <td>⭐⭐⭐⭐⭐ (5)</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
