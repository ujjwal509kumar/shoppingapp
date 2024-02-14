import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Watergun1(props) {
  const { nodes, materials } = useGLTF('/watergun1.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Default_OBJ} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/watergun1.gltf')
