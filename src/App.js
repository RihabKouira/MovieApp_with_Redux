import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <MovieList />
    </div>
  );
}

export default App;
