"use client";

import React from 'react';
import Header from '@/app/website/community/components/Header';
import Community from '@/app/website/community/components/Community';
import Events from '@/app/website/community/components/Events';
import Forums from '@/app/website/community/components/Forums';
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