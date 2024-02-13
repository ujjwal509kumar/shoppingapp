import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Denimshirt1(props) {
  const { nodes, materials } = useGLTF("/denimshirt1.gltf");
  return (
    <group {...props} dispose={null} scale={30}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.DF_Denim_FRONT_2670}
          material-color={"purple"}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.DF_Denim_FRONT_2670}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.DF_Denim_FRONT_2670}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.DF_Denim_FRONT_2670}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.DF_Denim_FRONT_2670}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.DF_Denim_FRONT_2670}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.DF_Denim_FRONT_2670}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Material1041664}
          material-color={"orange"}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/denimshirt1.gltf");
