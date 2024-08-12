'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { fetchMovie } from '@/utils/fetchMovie';
import { useParams } from 'next/navigation';

const MoviePage: React.FC = () => {
    const { title } = useParams(); // Get the movie title from the URL
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (title) {
            const fetchMovieData = async () => {
                try {
                    const decodedTitle = title;
                    // @ts-ignore
                    const movieData = await fetchMovie(decodedTitle);
                    setMovie(movieData);
                } catch (err) {
                    setError((err as any).message);
                } finally {
                    setLoading(false);
                }
            };

            fetchMovieData();
        }
    }, []);

    if (loading) {
        return (
            <Layout>
                <p>Loading movie details...</p>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <p className="text-red-500">Error: {error}</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto p-6">
                {movie && (
                    <>
                        <h1 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem'}}>{movie.Title}</h1>
                        <div className="flex flex-col md:flex-row items-center">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full md:w-1/3 rounded-lg shadow-lg"
                            />
                            <div className="md:ml-6 mt-6 md:mt-0">
                                <p><strong>Year:</strong> {movie.Year}</p>
                                <p><strong>Genre:</strong> {movie.Genre}</p>
                                <p><strong>Director:</strong> {movie.Director}</p>
                                <p><strong>Actors:</strong> {movie.Actors}</p>
                                <p><strong>Plot:</strong> {movie.Plot}</p>
                                <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default MoviePage;
