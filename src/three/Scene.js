import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import Cubes from './Cubes';
import Triangle from './Triangle';

const Scene = forwardRef(({ activeCube, pageIndex }, ref) => {
    const sceneRef = useRef();
    const { camera } = useThree();

    // Handle camera positions for different cubes
    useEffect(() => {
        if (activeCube !== null) {
            // Define positions for each cube view
            const positions = [
                [5, 2, 5],   // Position for cube 0
                [-5, 2, 5],  // Position for cube 1
                [0, 5, 5]    // Position for cube 2
            ];

            // Animate camera to the new position
            gsap.to(camera.position, {
                x: positions[activeCube][0],
                y: positions[activeCube][1],
                z: positions[activeCube][2],
                duration: 1.5,
                ease: 'power2.inOut',
                onUpdate: () => {
                    camera.lookAt(0, 0, 0);
                }
            });
        }
    }, [activeCube, camera]);

    // Expose scene methods to parent
    useImperativeHandle(ref, () => ({
        // Add any methods you want to expose
        resetCamera: () => {
            gsap.to(camera.position, {
                x: 0,
                y: 0,
                z: 10,
                duration: 1,
                ease: 'power2.inOut'
            });
        }
    }));

    // Ambient rotation or movement
    useFrame((state, delta) => {
        // Any continuous animations can go here
    });

    return (
        <group ref={sceneRef}>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Triangle marker - rotates to indicate current page */}
            <Triangle position={[-5, 0, 0]} pageIndex={pageIndex} />

            {/* Interactive cubes */}
            <Cubes activeCube={activeCube} />
        </group>
    );
});

export default Scene;