import { useRef, useEffect } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import data from "./data/custom.geo.json";
import lines from "./data/lines.json";

const Globe = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    const Globe = new ThreeGlobe()
      .hexPolygonsData(data.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => "white");

    Globe.arcsData(lines.pulls)
      .arcColor(() => "white")
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

export default Globe;
