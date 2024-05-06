import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

function Model({ path }) {
  const ref = useRef();
  const { scene, errors } = useGLTF(path);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // This adjusts the rotation speed
    }
  });

  useEffect(() => {
    if (scene) {
      // Adjust these values to make sure the model is centered
      scene.position.set(0, 0, 0); // Reset position to ensure rotation about center
      scene.scale.set(1, 1, 1); // Adjust scale as necessary
      scene.rotation.set(0, 0, 0); // Ensure the rotation starts correctly
    }
  }, [scene]);

  if (errors) {
    console.log("Errors loading the model:", errors);
    return <Html>Failed to load the model.</Html>;
  }

  return <primitive object={scene} ref={ref} />;
}

export default function ModelViewer() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
        />
        <Model path="/pack.glb" />
      </Canvas>
    </div>
  );
}
