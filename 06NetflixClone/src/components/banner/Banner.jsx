import {useState, useEffect } from "react"
import axios from "../axios.js"
import "./banner.css"
import requests from "../Requests.js"

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(requests.fetchNetflixOrginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchdata();
    }, []);
    console.log(movie);


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+"..." : string;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {
                        truncate(movie?.overview, 150)
                    }
                </h1>
            </div>
            <div className="bannerFadeBottom" />
        </header>
    )
}

export default Banner;