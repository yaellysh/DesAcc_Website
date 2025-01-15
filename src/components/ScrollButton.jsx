import React from 'react';

const ScrollButton = () => {
    const handleScrollDown = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const scrollTo = (element, duration) => {
                const start = window.scrollY;
                const end = element.getBoundingClientRect().top + start;
                const distance = end - start;
                let startTime = null;

                const animation = currentTime => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, start, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };

                const ease = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };

                requestAnimationFrame(animation);
            };

            scrollTo(targetSection, 1000);
        }
    };

    return (
        <div className="flex flex-row text-xs md:text-[1rem]">
            <button 
                onClick={() => handleScrollDown('clients')} 
                className="scroll-button mr-4 bg-[#194b92] text-white p-2 md:py-2 rounded hover:bg-[#6fc2b7] px-4">
                Explore What's Possible
            </button>
            <button 
                onClick={() => handleScrollDown('footer')} 
                className="scroll-button border border-[#194b92] text-[#194b92] md:py-2 rounded hover:text-[#6fc2b7] hover:border-[#6fc2b7] px-4">
                Contact Us
            </button>
        </div>
    );
};

export default ScrollButton;
