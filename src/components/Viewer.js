import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

import "./Viewer.css";
export default function Viewer() {
  return (
    <group>
      <Canvas
        style={{
          height: "40vh",
          backgroundColor: "#212123",
        }}
        camera={{ position: [0, 20, 50], fov: 10 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 25, 50]} intensity={1} />
        <Suspense id="Model">
          <Model smoooth={true} position={[0, -3, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </group>
  );
}
