'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { fetchMovie } from '@/utils/fetchMovie';

const moviesToFetch = [
    'The Shawshank Redemption',
    'Forrest Gump',
    'The Godfather',
    'Star Wars',
    'The Dark Knight',
    'Inception',
    'The Matrix',
    'Gladiator',
    'Titanic',
    'Pulp Fiction'
];


const HomePage: React.FC = () => {
    // @ts-ignore
    const [movies, setMovies] = useState<>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieData = await Promise.all(moviesToFetch.map((title) => fetchMovie(title)));
                setMovies(movieData);
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        console.log('...loading');
        return (
            <Layout>
                <p>Loading movies...</p>
            </Layout>
        );
    }

    //This is movie page layout
    //Fetching and mapping all movies here
    // @ts-ignore
    return (
        <Layout>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Movie List</h1>
                <ul className="space-y-4">
                    {movies.map((movie) => (
                        <li key={movie.imdbID} className="bg-white p-4 rounded shadow-lg flex">
                            <img src={movie.Poster} alt={movie.Title} className="w-32 h-auto rounded-lg" />
                            <div className="ml-4">
                                <Link href={`/movie/${movie.Title}`} className="text-xl font-semibold text-blue-500 hover:underline">
                                    {movie.Title}
                                </Link>
                                <p className="text-gray-600">Year: {movie.Year}</p>
                                <p className="text-gray-700 mt-2">{movie.Plot}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default HomePage;
