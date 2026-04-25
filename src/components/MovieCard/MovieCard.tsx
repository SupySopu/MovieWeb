import { Button } from "@headlessui/react";
import { Link } from "@tanstack/react-router";
import type { MovieCardProps } from "../../types/Movie";
import placeholder from "../../assets/landscape-placeholder.png"
import { CiStar } from "react-icons/ci";
import HeartFavourites from "../HeartFavourites/HeartFavourites";

export default function MovieCard({id, title, vote_average, poster_path} : MovieCardProps){

    return (
        <div className="movieCard">
            <Link to="/movie/$movieId" params={{movieId: String(id)}}>
                <Button className="redirectCard">
                    <div className="containerImg">
                        {
                            poster_path
                            ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                            : <img src={placeholder}/>
                        }
                    </div>
                    <h3>{title}</h3>
                </Button>
            </Link>

            <div>
                <div>
                    <CiStar className="iconStar" />
                    <h3 className="rating">{vote_average}</h3>
                </div>
                <div>
                    <HeartFavourites 
                     id={id}
                    />
                </div>
            </div>
        </div>
    )
}