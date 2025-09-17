"use client";

import React from 'react';
import Header from './Header';
import Community from './Community';
import Events from './Events';
import Forums from './Forums';
import Footer from '../../components/Footer';

const CommunityPageContent = () => {
    return (
        <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
            <Header />
            <Community />
            <Events />
            <Forums />
            <Footer />
        </div>
    );
};

export default CommunityPageContent; 