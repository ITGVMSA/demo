import React from 'react';
import Link from 'next/link';
import {Pages} from "@/enum/pages";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={Pages.HOME} className="text-white hover:text-gray-300 mx-2"><h1 className="text-2xl font-bold">My Movies</h1></Link>
                <nav>
                    <Link href={Pages.HOME} className="text-white hover:text-gray-300 mx-2">Home</Link>
                    <span className="mx-1">|</span>
                    <Link href={Pages.CONTACT} className="text-white hover:text-gray-300 mx-2">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
