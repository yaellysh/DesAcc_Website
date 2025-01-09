import React from 'react';

const ScrollButton = () => {
    const handleScrollDown = () => {
        const vendorsSection = document.getElementById('vendors');
        if (vendorsSection) {
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

            scrollTo(vendorsSection, 1000);
        }
    };

    return (
        <button onClick={handleScrollDown} className="scroll-button bg-[#194b92] text-white text-sm md:text-[1.5vw] md:text-[1rem] md:py-2 rounded hover:bg-[#6fc2b7] md:w-1/3">
            Dive In
        </button>
    );
};

export default ScrollButton; 
