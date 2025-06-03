import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../three/Scene';
import GlitchText from './GlitchText';

const Home = () => {
    const [activeCube, setActiveCube] = useState(0);
    const sceneRef = useRef();

    // Pages data corresponding to each cube
    const pages = [
        { name: 'About', path: '/about' },
        { name: 'Project/Case studies', path: '/projects' },
        { name: 'skills', path: '/skills' },
        { name: 'resume', path: '/resume' }
    ];

    const handleNextCube = () => {
        setActiveCube((prev) => (prev + 1) % 3);
    };

    const handlePrevCube = () => {
        setActiveCube((prev) => (prev - 1 + 3) % 3);
    };

    return (
        <div className="app-container">
            {/* Three.js Canvas */}
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#000000']} />
                <Scene activeCube={activeCube} pageIndex={null} ref={sceneRef} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            {/* Overlay Content */}
            <div className="home-content" style={{ position: 'absolute', top: '30%', left: '50px', zIndex: 10 }}>
                <h1 className="superhot-text">Jian Azul</h1>
                <div style={{ marginTop: '20px', fontSize: '24px' }}>
                    I am a <GlitchText words={['coder', 'artist', 'designer', 'creative']} />
                </div>
            </div>

            {/* Navigation */}
            <nav className="navigation">
                {pages.map((page, index) => (
                    <Link
                        key={index}
                        to={page.path}
                        className="nav-item"
                    >
                        {index === 0 && <span style={{ color: '#ffcc00' }}>▶</span>} {page.name}
                    </Link>
                ))}
            </nav>

            {/* Cube Controls */}
            <div className="cube-controls">
                <button className="arrow-button" onClick={handlePrevCube}>←</button>
                <button className="arrow-button" onClick={handleNextCube}>→</button>
            </div>
        </div>
    );
};

export default Home;