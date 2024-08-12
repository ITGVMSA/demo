const API_KEY = 'e3918146';
const BASE_URL = 'http://www.omdbapi.com/';


// @ts-ignore
export const fetchMovie = async (title: string): Promise<Movie> => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${title}`);

    if (!response.ok) {
        throw new Error('Failed to fetch movie data');
    }

    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    return data;
};
