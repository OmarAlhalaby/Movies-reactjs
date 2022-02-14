import PullToRefresh from "react-simple-pull-to-refresh";
import $ from "jquery";
import React, { useState, useEffect } from "react";
import { getMovies } from "api/Api";
import Movie from "components/Movie";
import Navbar from "components/Navbar";

function Movies() {
    const [movies, setMovies] = useState<any | null>([]);
    const [orderby, setOrderBy] = useState('release_date.desc');
    const [isFetching, setFetching] = useState(true);
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getMovies(orderby, 1)
            .then(response => {
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages)
            })
            .catch(function () {
                setFetching(false);
            })
        setCurrentPage(1);
    }, [orderby]);

    useEffect(() => {
        if (currentPage !== 1 && currentPage <= totalPages) {
            getMovies(orderby, currentPage)
                .then(response => setMovies([...movies, ...response.data.results]))
                .catch(function () {
                    setFetching(false);
                })
        }
        // eslint-disable-next-line
    }, [currentPage])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [isFetching])

    const isBottom = (el: any) => {
        return el.getBoundingClientRect().bottom < window.innerHeight;
    }

    const handleScroll = () => {
        const wrappedElement = document.getElementById('movies');
        if (isBottom(wrappedElement)) {
            setCurrentPage(currentPage => (currentPage + 1))
        }
    }

    if (!isFetching) {
        return <div id="movies">Error...</div>;
    }

    return (
        <>
            <div className="text-right mb-5 bg-light sticky-top pr-2 border rounded">
                <Navbar class="home" />
                <label className="mr-1">Order by </label>
                <select onChange={(e) => {
                    setOrderBy(e.target.value);
                    $(window).scrollTop(0)
                }}>
                    <option value="release_date.desc">Release date</option>
                    <option value="original_title.asc">Alphabetical</option>
                    <option value="vote_average.desc">Rating </option>
                </select>
            </div>
            <PullToRefresh
                onRefresh={() =>
                    getMovies(orderby, 1).then(response => {
                        setMovies(response.data.results);
                        setCurrentPage(1);
                    })}>
                <div className="p-5">
                    <div className="text-center mb-5">Pull To Refresh ↓</div>
                    <div id="movies" className="row">
                        {movies.map((result: any, id: number) =>
                            <Movie key={id} movie={result} />
                        )}
                    </div>
                </div>
            </PullToRefresh >
        </>
    )
}

export default Movies;