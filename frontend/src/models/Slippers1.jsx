import Reac from "react";
import { useGLTF } from "@react-three/drei";

export default function Slippers1(props) {
  const { nodes, materials } = useGLTF("/slippers1.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.013}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
            <mesh
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Shoe}
            />
            <mesh
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.Fuzz}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/slippers1.gltf");
