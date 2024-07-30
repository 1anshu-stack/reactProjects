import { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css"

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/orginal";

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchdata()
    }, [fetchUrl])

    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            {
                movies.map((movie) => (
                    <img src={`https://image.tmdb.org/t/p/orginal/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg`} alt={movie.name} />
                ))
            }
        </div>
    )
}

export default Row;