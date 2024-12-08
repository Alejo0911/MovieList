import React,  {useState} from 'react';
import "./App.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      titulo: "Hasta el ultimo hombre",
      genero: "Belico",
      image: "Hasta_el_aultimo_hombre-205606610-large.jpg",
    },
    {
      id: 2,
      titulo: "Una historia del bronx",
      genero: "Drama",
      image: "20373248.jpg",
    },
    {
      id: 3,
      titulo: "Bad boys hasta la muerte",
      genero: "Accion",
      image: "POSTER-Bad-Boys-Hasta-la-muerte-683x1024.jpg",
    },
    {
      id: 4,
      titulo: "Sueño de fuga",
      genero: "Drama",
      image: "the_shawshank_redemption-576140557-mmed.jpg",
    },
    {
      id: 5,
      titulo: "El Padrino",
      genero: "Drama",
      image: "the_godfather-488102675-msmall.jpg",
    },
    {
      id: 6,
      titulo: "Son como niños 2",
      genero: "Comedia",
      image: "grown_ups_2-826990695-large.jpg",
    },
    {
      id: 7,
      titulo: "Forrest Gump",
      genero: "Comedia",
      image: "forrest_gump-212765827-mmed.jpg",
    },
    {
      id: 8,
      titulo: "ScarFace",
      genero: "Drama",
      image: "scarface-798722679-mmed.jpg",
    },
    {
      id: 9,
      titulo: "Parasitos",
      genero: "Intriga",
      image: "Paraasitos-432616131-large.jpg",
    },
  ]);
  return(
    <div className="app-container">
      <h1 className="app-tittle">🎬 Movie List</h1>
      <MovieList movies={movies} />
      <Footer />
    </div>
  )
};

export default App;
