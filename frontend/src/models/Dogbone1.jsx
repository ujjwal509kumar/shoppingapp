import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Dogbone1(props) {
  const { nodes } = useGLTF("/dogbone1.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes["Box001_01_-_Default_0"].geometry}
            material-color={"gray"}
            position={[-6.814, 0, -1.969]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dogbone1.gltf");
