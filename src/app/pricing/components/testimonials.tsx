import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Discover why thousands of traders are choosing Bulls.AI";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                document.querySelector('h2.testimonials-heading')?.classList.add('opacity-100');
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        "I've been using Bullz.AI for some time now, and it's hands down one of the best tools for trade journaling and analysis. The platform is user-friendly, insightful, and incredibly helpful for improving my trading strategies.",
        "Bullz.AI has transformed the way I approach trading. The insights and analytics provided are top-notch.",
        "A must-have tool for any serious trader. Bullz.AI's features are unmatched in the industry."
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-black py-8 sm:py-12 md:py-16 px-4">
            <h2 className="testimonials-heading text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto leading-relaxed">
                {displayedText}
            </h2>
            
            <div className="bg-gradient-to-r from-[#286D1C] to-[#1E2D60] text-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto relative min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
                <button 
                    onClick={handlePrev} 
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors"
                    aria-label="Previous testimonial"
                >
                    &lt;
                </button>
                
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <span className="text-3xl sm:text-4xl md:text-6xl">&quot;</span>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#4ED634] text-lg sm:text-xl md:text-2xl">★</span>
                        ))}
                    </div>
                </div>
                
                <p className="text-center text-sm sm:text-base md:text-lg px-8 sm:px-12">
                    {testimonials[currentIndex]}
                </p>
                
                <div className="flex justify-center mt-4 sm:mt-6">
                    {testimonials.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-[#4ED634]' : 'bg-white/30'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
                
                <button 
                    onClick={handleNext} 
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors"
                    aria-label="Next testimonial"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Testimonials; 