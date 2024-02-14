import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Xylophone1(props) {
  const { nodes, materials } = useGLTF('/xylophone1.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <group position={[-0.418, 0.019, 5.126]}>
          <mesh geometry={nodes.Frame_Frame1_0.geometry} material={materials.Frame1} />
          <mesh geometry={nodes.Nails_Nails1_0.geometry} material={materials.Nails1} />
          <mesh geometry={nodes.Mallet_Mallet1_0.geometry} material={materials.Mallet1} position={[1.342, -0.533, 4.584]} scale={1.427} />
          <mesh geometry={nodes.ToneBars_Bars_0.geometry} material={materials.Bars} />
          <mesh geometry={nodes.Mallet2_Mallet1_0.geometry} material={materials.Mallet1} position={[1.741, -0.533, 4.584]} scale={1.427} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/xylophone1.gltf')
