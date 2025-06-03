import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Triangle = ({ position, pageIndex }) => {
    const triangleRef = useRef();
    const materialRef = useRef(new THREE.MeshStandardMaterial({
        color: '#ffcc00',
        side: THREE.DoubleSide,
        emissive: '#ffcc00',
        emissiveIntensity: 0.5
    }));

    // Create a triangle geometry
    const createTriangleGeometry = () => {
        const geometry = new THREE.BufferGeometry();

        // Define vertices
        const vertices = new Float32Array([
            0, 1, 0,    // top
            -0.866, -0.5, 0,  // bottom left
            0.866, -0.5, 0   // bottom right
        ]);

        // Define normals
        const normals = new Float32Array([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ]);

        // Add attributes
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));

        return geometry;
    };

    // Handle position changes based on page index
    useEffect(() => {
        if (pageIndex !== null && triangleRef.current) {
            // Define positions for each page
            const positions = [
                [-5, 0, 0],   // Home/About
                [-5, -1, 0],  // Projects
                [-5, -2, 0],  // Skills
                [-5, -3, 0],  // Resume
            ];

            // Animate triangle to new position
            if (positions[pageIndex]) {
                gsap.to(triangleRef.current.position, {
                    x: positions[pageIndex][0],
                    y: positions[pageIndex][1],
                    z: positions[pageIndex][2],
                    duration: 0.8,
                    ease: 'power2.inOut'
                });
            }
        }
    }, [pageIndex]);

    // Continuous rotation animation
    useFrame((state, delta) => {
        if (triangleRef.current) {
            triangleRef.current.rotation.z += delta * 0.5;
        }
    });

    return (
        <mesh
            ref={triangleRef}
            position={position}
            material={materialRef.current}
            geometry={createTriangleGeometry()}
            scale={[0.7, 0.7, 0.7]}
        />
    );
};

export default Triangle;