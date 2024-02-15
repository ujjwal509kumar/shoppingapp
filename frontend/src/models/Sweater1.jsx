import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Sweater1(props) {
  const { nodes, materials } = useGLTF('/sweater1.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_Copy_1_FRONT_2659} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_Copy_1_FRONT_2659} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_Copy_1_FRONT_2659} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_FRONT_2645} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_FRONT_2645} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_FRONT_2645} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_FRONT_2645} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.K_Rib_100Ctn_200GSM_M_DF22014_FRONT_2645} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Material513130} />
      </group>
    </group>
  )
}

useGLTF.preload('/sweater1.gltf')
