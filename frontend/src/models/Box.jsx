import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import data from "./data/custom.geo.json";
import lines from "./data/lines.json";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const globeRef = useRef();

  useFrame(() => {
    globeRef.current.rotation.y += 0.002;
  });

  useEffect(() => {
    if (!globeRef.current) return;

    const Globe = new ThreeGlobe()
      .hexPolygonsData(data.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => "white");

    Globe.arcsData(lines.pulls)
      .arcColor(() => "pink")
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(3000)
      .arcDashInitialGap((e) => e.order * 2);

    const globeMaterial = Globe.globeMaterial();
    globeMaterial.color = new THREE.Color("#3a228a");
    globeRef.current.add(Globe);
  }, []);

  return <mesh ref={globeRef} />;
};

export default Box;
