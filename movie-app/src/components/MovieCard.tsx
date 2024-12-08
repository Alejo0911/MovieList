import React from "react"; //Importar Reactr
import Swal from "sweetalert2"; //Importar la libreria de los pop-ups
import { Movie } from "../types/Movie"; //Importa la interfaz de los props

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    //Definir la ruta para importar la imagen basada en el nombre de la imagen
    const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

    //Crear la ventana emergente
    const showDeatails = () => {
        Swal.fire({
            title: movie.titulo,
            text: `Genero: ${movie.genero}`,
            imageUrl: imageSrc,
            imageHeight: 300,
            imageAlt: `${movie.titulo} poster`,
            confirmButtonText: "Excelente",
        });
    };
    return(
        <div className="movie-card" onClick={showDeatails}>
            <img src={imageSrc} alt={movie.titulo} className="movie-image"/>
            <h3>{movie.titulo}</h3>
            <p>{movie.genero}</p>
        </div>
    )
}

export default MovieCard;



