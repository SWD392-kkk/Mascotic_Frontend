import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Float, Html, Center } from '@react-three/drei';

function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={10} />;
}

export default function MascotCanvas({ isSpeaking }) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 8], fov: 35 }}
            style={{ height: '100%', width: '100%' }}
            gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        >
            <hemisphereLight intensity={0.5} groundColor="black" />
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={4} castShadow />
            <pointLight position={[-10, 5, -10]} intensity={2} color="#8b5cf6" />
            <pointLight position={[0, -5, 5]} intensity={1} color="#3b82f6" />

            <Suspense fallback={
                <Html center>
                    <div style={{
                        color: '#a78bfa',
                        fontWeight: 'bold',
                        background: 'rgba(15, 23, 42, 0.8)',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        border: '1px solid #8b5cf6',
                        whiteSpace: 'nowrap'
                    }}>
                        Đang triệu hồi Cosmo...
                    </div>
                </Html>
            }>
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                    <Center position={[0, -0.8, 0]}>
                        <Model url="/models/Demo_Avatar_[FILES_FREE_TO_DOWNLOAD]_gltf_binary.glb" />
                    </Center>
                </Float>

                <Environment preset="studio" />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
                makeDefault
            />
        </Canvas>
    );
}

// Preload the model
useGLTF.preload("/models/Demo_Avatar_[FILES_FREE_TO_DOWNLOAD]_gltf_binary.glb");

