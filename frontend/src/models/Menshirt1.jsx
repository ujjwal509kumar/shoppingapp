import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Menshirt1(props) {
  const { nodes, materials } = useGLTF("/menshirt1.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.3}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Collar_FRONT_2889}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Collar_Stand_FRONT_2884}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Material658738}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Body_F_FRONT_2894}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Bodyr_F_Placket_FRONT_2899}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Body_B_FRONT_2904}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Sleeves_FRONT_2909}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.Sleeve_Placket_FRONT_2914}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Material693271}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Cuffs_FRONT_2919}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.Material707870}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.PT_FABRIC_FRONT_2976}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.PT_FABRIC_FRONT_27773}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/menshirt1.gltf");
