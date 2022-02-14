import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getDetails } from "api/Api";
import Navbar from "components/Navbar";
import image from 'assets/images/noContent.jpg';

function Details() {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [isFetching, setFetching] = useState(true);
    const [message, setMessage] = useState('');
    const [details, setDetails] = useState<any | null>([]);
    const source =
        (details.poster_path) ?
            "http://image.tmdb.org/t/p/w342" + details.poster_path :
            image

    useEffect(() => {
        getDetails(id)
            .then(response => {
                setDetails(response.data);
                setLoading(false);
                setMessage('Loading...')
            }).catch(function () {
                setFetching(false);
                setMessage('Movie is not found')
            });
    }, [id])

    if (isLoading || !isFetching) {
        return (
            <>
                <Navbar />
                <div className="p-3">{message}</div>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={source} className="" alt="Poster"></img>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="text-left text-danger font-weight-bold">SYNOPSIS</div>
                        <p className="text-left">{details.overview}</p>
                        <div className="row p-2 mx-0 movie-details">
                            <div className="col-4 col-md-3">
                                <div className="text-left text-danger font-weight-bold">GENRE</div>
                                {
                                    details.genres.map(
                                        (item: any) =>
                                        (
                                            <div className="text-left" key={item.id}>{item.name}</div>
                                        )
                                    )
                                }
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="text-left text-danger font-weight-bold">LANGUAGE</div>
                                <p className="text-left text-uppercase">{details.original_language}</p>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="text-left text-danger font-weight-bold">DURATION</div>
                                <p className="text-left">{details.runtime} mins</p>
                            </div>
                        </div>
                        <div className="col-12 mt-0 mt-md-5">
                            <a href={"/book"} className="btn btn-danger float-left mt-5 mb-5">Book Now</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Details;