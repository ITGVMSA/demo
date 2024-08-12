import React from 'react';
import Layout from '@/components/Layout';
import { fetchPosts, Post } from '@/utils/fetchPosts';
import { notFound } from 'next/navigation';

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
    const posts: Post[] = await fetchPosts();
    const post = posts[parseInt(params.id)];

    if (!post) {
        notFound();
    }

    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </Layout>
    );
};

export default PostPage;
