"use client";

import React, { useState } from 'react';
import SharedSiteHeader from '../components/Header';
import PricingPageHeader from './components/Header';
import PricingCard from './components/PricingCard';
import FeatureComparisonTable from './components/FeatureComparisonTable';
import PaymentMethod from './components/paymentMethod';
import Testimonials from './components/testimonials';
import Footer from '../components/Footer';

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(true);

    const pricingPlans = [
        { 
            planName: 'Free', 
            price: isYearly ? '$0/Year' : '$0/month',
            features: [
                "100 trades/month (Spot & Margin)",
                "Basic AI (50 queries/month)",
                "Portfolio mgmt & best exit analysis",
                "1 GB storage, CSV imports",
                "30 alerts, USD only"
            ]
        },
        { 
            planName: 'Standard', 
            price: isYearly ? '$99.99/Year' : '$9.99/month',
            features: [
                "500 trades/month (Spot, Margin, Futures, Options)",
                "Advanced AI (100 queries/month)",
                "5 GB storage, CSV + auto-connect",
                "200 alerts, multi-currency (USD, EUR, GBP, INR)"
            ]
        },
        { 
            planName: 'Premium', 
            price: isYearly ? '$149.99/Year' : '$14.99/month',
            features: [
                "Unlimited trades (all markets)",
                "Premium AI (unlimited queries)",
                "20 GB storage, CSV + auto-connect",
                "Unlimited alerts, extended currency support"
            ]
        },
    ];

    return (
        <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
            <SharedSiteHeader />
            <PricingPageHeader setIsYearly={setIsYearly} isYearly={isYearly} />
            
            {/* Responsive container for pricing cards */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 lg:gap-10">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] mx-auto md:mx-0">
                            <PricingCard planName={plan.planName} price={plan.price} features={plan.features} />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Feature comparison table wrapped in responsive container */}
            <div className="container mx-auto px-4 overflow-x-auto">
                <FeatureComparisonTable 
                    features={["Exchange Supported", "Trading Volume", "Portfolio Management", "Advanced Analytics","AI Strategies", "AI Requests", "Convertor", "Data Storage", "AI Signals", "Alerts", "Trade Imports", "Trade Sharing", "Currency Support", "Notebook", "Best Exit Analysis", "Trading Products"]}
                    plans={{
                        Free: ["1", "100 Trades/month (Spot & Margin)", true, true, "Basic", "50 Requests/month", false, "1 GB", true, "30 Alerts", "CSV Upload", false, "USD only", true, true, "SPOT, Margin"],
                        Standard: ["5", "500 Trades/month", true, true, "Advanced", "100 Requests/month", true, "5 GB", true, "200 Alerts", "CSV, Auto-Connect", true, "USD, EUR, GBP, INR", true, true, "SPOT, Margin, Futures, Options"],
                        Premium: ["Unlimited", "Unlimited (all markets)", true, true, "Premium", "Unlimited", true, "20 GB", true, "Unlimited", "CSV, Auto-Connect", true, "Extended currency support", true, true, "All markets"],
                    }}
                />
            </div>

            {/* Payment method and testimonials */}
            <div className="container mx-auto px-4">
                <PaymentMethod />
                <Testimonials />
            </div>
            
            <Footer />
        </div>
    );
};

export default PricingPage;
