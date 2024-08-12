'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { fetchPosts, Post } from '@/utils/fetchPosts';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Pages } from '@/enum/pages'; // Corrected import path

const POSTS_PER_PAGE = 8;

const HomePage: React.FC = () => {
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchAndSetPosts = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
        };

        fetchAndSetPosts();
    }, []);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    return (
        <Layout>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Welcome to My Blog</h1>
                <div className="space-y-8">
                    {paginatedPosts.map((post) => (
                        <div key={post.id} className="p-6 bg-white shadow-lg rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                            <p className="text-gray-600 mt-2">{post.description}</p>
                            <Link href={`${Pages.POST}/${post.id}`} className="text-blue-500 hover:underline mt-4 block">
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-8">
                    {page > 1 && (
                        <Link href={`${Pages.HOME}?page=${page - 1}`}>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
                        </Link>
                    )}
                    {page < totalPages && (
                        <Link href={`${Pages.HOME}?page=${page + 1}`}>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-auto">Next</button>
                        </Link>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
