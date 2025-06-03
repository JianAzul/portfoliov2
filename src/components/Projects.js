import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../three/Scene';

const Projects = () => {
    return (
        <div className="app-container">
            {/* Three.js Canvas */}
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#000000']} />
                <Scene activeCube={null} pageIndex={1} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            {/* Content */}
            <div style={{ position: 'absolute', top: '30%', left: '50px', zIndex: 10, maxWidth: '50%' }}>
                <h1 className="superhot-text">Projects</h1>
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    This is the Projects page content. Replace this with your actual project information.
                </p>
            </div>

            {/* Navigation */}
            <nav className="navigation">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item active">
                    <span style={{ color: '#ffcc00' }}>▶</span> Project/Case studies
                </Link>
                <Link to="/skills" className="nav-item">skills</Link>
                <Link to="/resume" className="nav-item">resume</Link>
            </nav>
        </div>
    );
};

export default Projects;