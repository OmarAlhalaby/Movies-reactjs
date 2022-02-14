import React, { useState, useEffect } from "react";
import image from "assets/images/noContent.jpg";

function Movie(result: any) {
    const [isHovering, setIsHovering] = useState(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
    let isMobile: boolean = (width <= 768);
    const movie = result.movie;
    const source = (movie.poster_path) ?
        "http://image.tmdb.org/t/p/w342" + movie.poster_path :
        image


    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const MovieDetails = () => {
        return (
            <a href={"movie/" + movie.id} onMouseLeave={handleHoverOut}>
                <div className={!isMobile ? "on-hover-dv" : ""}>
                    <div className={!isMobile ? "on-hover-dv-inside" : ""}>
                        <h6 className="text-success font-weight-bold w-75 text-break">{movie.title}</h6>
                        <div className={(!isMobile ? "text-white" : "text-dark") + " mb-3"}>{movie.popularity}</div>
                        <button className={!isMobile ? "btn btn-danger" : "d-none"}>VIEW MORE</button>
                    </div>
                </div >
            </a>
        );
    };

    const handleHoverOn = () => {
        setIsHovering(true)
    }

    const handleHoverOut = () => {
        setIsHovering(false)
    }

    return (
        <>
            <div className="col-12 col-md-3 mb-5">
                <a href={"movie/" + movie.id}>
                    <img src={source} className="mb-3" alt="Poster" width="249px" height="293" onMouseOver={handleHoverOn}>
                    </img>
                </a>
                {(isHovering || isMobile) && <MovieDetails />}
            </div>
        </>
    )
}

export default Movie;