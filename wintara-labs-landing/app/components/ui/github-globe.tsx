"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GlobeComponent = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={globeRef} args={[1, 64, 64]}>
      <meshPhongMaterial
        color="#45d1e8"
        emissive="#45d1e8"
        emissiveIntensity={0.2}
        wireframe
      />
    </Sphere>
  );
};

export const GithubGlobe = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <GlobeComponent />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

