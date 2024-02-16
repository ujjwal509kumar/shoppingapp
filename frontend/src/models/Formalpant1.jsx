import React from "react";
import { useGLTF } from "@react-three/drei";

export default function FormalPant1(props) {
  const { nodes, materials } = useGLTF("/formalpant1.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Material369563}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.W_Twill_98_Ctn_2Spa_260GSM_H_DF22018_FRONT_2641}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.W_Twill_98_Ctn_2Spa_260GSM_H_DF22018_FRONT_2641}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.W_Twill_98_Ctn_2Spa_260GSM_H_DF22018_FRONT_2641}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.W_Twill_98_Ctn_2Spa_260GSM_H_DF22018_FRONT_2641}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.W_Twill_98_Ctn_2Spa_260GSM_H_DF22018_FRONT_2641}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/formalpant1.gltf");
