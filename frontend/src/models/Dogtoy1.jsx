import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Dogtoy1(props) {
  const { nodes, materials } = useGLTF("/dogtoy1.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-139.724, 585.321, 69.316]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-9.75, 9.75, 9.75]}
          />
          <mesh
            geometry={nodes.Sphere003_Material008_0.geometry}
            material={materials["Material.008"]}
            position={[435.921, 599.451, 94.747]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-10.574, 10.574, 10.574]}
          />
          <mesh
            geometry={nodes.Sphere005_Material008_0.geometry}
            material={materials["Material.008"]}
            position={[435.921, 599.451, 16.433]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-10.574, 10.574, 10.574]}
          />
          <mesh
            geometry={nodes.Sphere004_Material008_0.geometry}
            material={materials["Material.008"]}
            position={[513.463, 551.986, 57.495]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={13.634}
          />
          <mesh
            geometry={nodes.Torus_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[360.631, 504.17, 53.025]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[50.655, 36.961, 28.402]}
          />
          <mesh
            geometry={nodes.BezierCircle001_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[324.743, 411.255, 135.618]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={48.536}
          />
          <mesh
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[367.698, 580.708, 55.204]}
            rotation={[-Math.PI / 2, -1.412, 0]}
            scale={[78.836, 74.368, 103.224]}
          />
          <mesh
            geometry={nodes.Sphere001_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[160.446, 468.139, 49.769]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[71.186, 72.281, 261.732]}
          />
          <mesh
            geometry={nodes.Cube001_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[350.071, 545.799, 130.523]}
            rotation={[-1.618, 0, 0]}
            scale={[31.424, 3.311, 50.994]}
          />
          <mesh
            geometry={nodes.BezierCurve_Material007_0.geometry}
            material={materials["Material.007"]}
            position={[-95.95, 528.409, 69.922]}
            rotation={[-Math.PI, 0, 0.763]}
            scale={81.366}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dogtoy1.gltf");
