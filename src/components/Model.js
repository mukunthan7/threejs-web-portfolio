import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/assets/dog.glb");
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-3.4, 0, -3]}
        scale={[7, 1, 7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.7, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/dog.glb");
