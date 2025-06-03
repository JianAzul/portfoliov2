import React, { useState, useEffect } from 'react';

const GlitchText = ({ words }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        let wordIndex = 0;

        const changeWord = () => {
            setIsGlitching(true);

            // After glitch effect starts
            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                setCurrentWord(words[wordIndex]);

                // End glitch effect
                setTimeout(() => {
                    setIsGlitching(false);
                }, 500);
            }, 500);
        };

        const intervalId = setInterval(changeWord, 3000);

        return () => clearInterval(intervalId);
    }, [words]);

    // Function to create random characters for glitch effect
    const createGlitchText = (text) => {
        if (!isGlitching) return text;

        const glitchChars = '!@#$%^&*()_+-={}[]|;:,.<>?/\\';
        const glitchRate = 0.3; // Percentage of characters to glitch

        return text.split('').map((char, i) => {
            if (Math.random() < glitchRate) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
    };

    return (
        <span className={`glitch-text ${isGlitching ? 'glitching' : ''}`} style={{
            color: '#ff3333',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            letterSpacing: isGlitching ? '-2px' : '0',
            textShadow: isGlitching ? '2px 2px #00ffff, -2px -2px #ff00ff' : 'none',
            transition: 'text-shadow 0.1s, letter-spacing 0.1s',
            display: 'inline-block',
            minWidth: '100px',
        }}>
      {createGlitchText(currentWord)}
    </span>
    );
};

export default GlitchText;