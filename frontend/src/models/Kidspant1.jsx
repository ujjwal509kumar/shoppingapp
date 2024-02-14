import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Kidspant1(props) {
  const { nodes, materials } = useGLTF('/kidspant1.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.FABRIC_1_FRONT_2660} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_Copy_1_FRONT_2665} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_FRONT_2635} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_FRONT_2635} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_FRONT_2635} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_FRONT_2650} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_FRONT_2650} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.K_Jersey_100Ctn_110GSM_S_DF22016_FRONT_2650} />
      </group>
    </group>
  )
}

useGLTF.preload('/kidspant1.gltf')
