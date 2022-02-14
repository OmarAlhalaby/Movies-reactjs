import axios from 'axios';

let url = '';

export async function getMovies(orderby: string, currentPage: number) {
    url = `http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=${orderby}&page=${currentPage}`;
    const response = await axios.get(url);
    return response;
}

export async function getDetails(id: any) {
    url = `http://api.themoviedb.org/3/movie/${id}?api_key=328c283cd27bd1877d9080ccb1604c91`;
    const response = await axios.get(url);
    return response;
}

