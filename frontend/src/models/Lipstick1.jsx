import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Lipstick1(props) {
  const { nodes, materials } = useGLTF('/lipstick1.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh geometry={nodes['lipstick_holder_Material_#31_0'].geometry} material={materials.Material_31} position={[-129.371, -3.681, 10.691]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.343, 1.343, 1.396]} />
        <mesh geometry={nodes['lipstick_red_Material_#29_0'].geometry} material={materials.Material_29} position={[-129.339, 29.462, 10.662]} rotation={[-Math.PI / 2, 0, 0]} scale={1.084} />
        <mesh geometry={nodes['lipstick_cap_Material_#30_0'].geometry} material={materials.Material_30} position={[-129.577, -30.029, 49.369]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/lipstick1.gltf')
