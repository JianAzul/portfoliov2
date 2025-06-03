import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../three/Scene';

const Resume = () => {
    return (
        <div className="app-container">
            {/* Three.js Canvas */}
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#000000']} />
                <Scene activeCube={null} pageIndex={3} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            {/* Content */}
            <div style={{ position: 'absolute', top: '30%', left: '50px', zIndex: 10, maxWidth: '50%' }}>
                <h1 className="superhot-text">Resume</h1>
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    This is the Resume page content. Replace this with your actual resume information or add a downloadable PDF link.
                </p>
                <a
                    href="#"
                    className="superhot-text"
                    style={{
                        display: 'inline-block',
                        marginTop: '20px',
                        padding: '10px 20px',
                        border: '2px solid #ff3333',
                        textDecoration: 'none',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#ff3333'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Download PDF
                </a>
            </div>

            {/* Navigation */}
            <nav className="navigation">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item">Project/Case studies</Link>
                <Link to="/skills" className="nav-item">skills</Link>
                <Link to="/resume" className="nav-item active">
                    <span style={{ color: '#ffcc00' }}>▶</span> resume
                </Link>
            </nav>
        </div>
    );
};

export default Resume;