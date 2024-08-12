import React from 'react';
import Layout from '@/components/Layout';

const ContactPage: React.FC = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <div>
                <h2>Contact Person: Sherlock Holmes</h2>
                <p>
                    <strong>Email:</strong> sherlock.holmes@bakerstreet.com
                </p>
                <p>
                    <strong>Phone:</strong> +44 20 7946 0958
                </p>
                <p>
                    <strong>Address:</strong> 221B Baker Street, London, NW1 6XE, England
                </p>
                <p>
                    If you have any inquiries or need assistance, please don't hesitate to contact Mr. Holmes. He specializes in solving complex problems and will be more than happy to assist you.
                </p>
            </div>
        </Layout>
    );
};

export default ContactPage;
