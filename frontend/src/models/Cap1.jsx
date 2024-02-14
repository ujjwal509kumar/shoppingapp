import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cap1(props) {
  const { nodes, materials } = useGLTF("/cap1.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.baseballCap.geometry}
            material={materials.baseballCap}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
          <mesh
            geometry={nodes.baseballCap_1.geometry}
            material={materials.baseballCap}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
          <mesh
            geometry={nodes.plastic.geometry}
            material={materials.plastic}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
          <mesh
            geometry={nodes.plastic_1.geometry}
            material={materials.plastic}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
          <mesh
            geometry={nodes.baseballCap_2.geometry}
            material={materials.baseballCap}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
          <mesh
            geometry={nodes.blinn1SG.geometry}
            material={materials.blinn1SG}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
          <mesh
            geometry={nodes.baseballCap_3.geometry}
            material={materials.baseballCap}
            position={[0.005, -2.9, -11.842]}
            rotation={[-0.161, 0, 0]}
            scale={20.118}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cap1.gltf");
