import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import { gsap } from 'gsap';

const Cubes = ({ activeCube }) => {
    // Refs for the three cubes
    const cube1Ref = useRef();
    const cube2Ref = useRef();
    const cube3Ref = useRef();

    // Material refs for hover effects
    const material1Ref = useRef(new MeshStandardMaterial({ color: '#ff3333' }));
    const material2Ref = useRef(new MeshStandardMaterial({ color: '#ff3333' }));
    const material3Ref = useRef(new MeshStandardMaterial({ color: '#ff3333' }));

    // Handle active cube highlighting
    useEffect(() => {
        // Reset all cubes
        [material1Ref, material2Ref, material3Ref].forEach(matRef => {
            gsap.to(matRef.current.color, {
                r: 1,
                g: 0.2,
                b: 0.2,
                duration: 0.5
            });

            gsap.to(matRef.current, {
                emissiveIntensity: 0,
                duration: 0.5
            });
        });

        // Highlight active cube
        const activeMaterialRef = [material1Ref, material2Ref, material3Ref][activeCube];
        if (activeMaterialRef) {
            gsap.to(activeMaterialRef.current.color, {
                r: 1,
                g: 0.4,
                b: 0.4,
                duration: 0.5
            });

            gsap.to(activeMaterialRef.current, {
                emissiveIntensity: 0.5,
                emissive: '#ff0000',
                duration: 0.5
            });
        }
    }, [activeCube]);

    // Gentle floating animation
    useFrame((state, delta) => {
        if (cube1Ref.current) {
            cube1Ref.current.rotation.y += delta * 0.1;
            cube1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 2;
        }

        if (cube2Ref.current) {
            cube2Ref.current.rotation.y -= delta * 0.15;
            cube2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.2 - 1;
        }

        if (cube3Ref.current) {
            cube3Ref.current.rotation.y += delta * 0.12;
            cube3Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4 + 2) * 0.2 + 0.5;
        }
    });

    return (
        <>
            {/* Cube 1 - Top right */}
            <mesh
                ref={cube1Ref}
                position={[4, 2, 0]}
                material={material1Ref.current}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[2, 2, 2]} />
            </mesh>

            {/* Cube 2 - Top left */}
            <mesh
                ref={cube2Ref}
                position={[-4, -1, 0]}
                material={material2Ref.current}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[2, 2, 2]} />
            </mesh>

            {/* Cube 3 - Bottom center */}
            <mesh
                ref={cube3Ref}
                position={[0, 0.5, 0]}
                material={material3Ref.current}
                castShadow
                receiveShadow
                scale={[1.5, 1.5, 1.5]}
            >
                <boxGeometry args={[2, 2, 2]} />
            </mesh>
        </>
    );
};

export default Cubes;