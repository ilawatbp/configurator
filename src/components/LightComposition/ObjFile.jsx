// src/components/ObjFile.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const ObjFile = ({ config }) => {
  const containerRef = useRef();
  const sceneRef = useRef(new THREE.Scene());
  const modelRef = useRef(null);
  const rendererRef = useRef();
  const cameraRef = useRef();

  const dimensionLines = useRef([]);
  const dimensionLabels = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0xc7c7c7);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 100, 300);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(ambientLight, directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 100, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const loader = new OBJLoader();
    // loader.load(
    //   "/models/myModel.obj",
    //   (obj) => {
    //     modelRef.current = obj;
    //     updateSceneWithConfig();
    //   },
    //   undefined,
    //   (err) => console.error("OBJ load error:", err)
    // );

loader.load(import.meta.env.BASE_URL + "models/myModel.obj", (obj) => {
  modelRef.current = obj;
  updateSceneWithConfig();
});
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      clearDimensionLabels(); // 💥 Clear on unmount too
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) {
      updateSceneWithConfig();
    }
  }, [config]);

  const updateSceneWithConfig = () => {
    const scene = sceneRef.current;
    const model = modelRef.current.clone();
    model.scale.set(1, 1, 1);

    // Clear old pendants, strings, surface
    scene.children = scene.children.filter(
      (obj) =>
        !obj.userData?.isPendant &&
        !obj.userData?.isString &&
        !obj.userData?.isSurface
    );

    // Clear dimension lines and labels
    dimensionLines.current.forEach((line) => scene.remove(line));
    dimensionLines.current = [];
    clearDimensionLabels();

    const {
      rows,
      cols,
      spacing,
      pattern,
      surfaceHeight,
      lowest,
      highest,
      baseOffset,
      surfaceLength: inputSurfaceLength,
      surfaceWidth: inputSurfaceWidth,
    } = config;

    let surfaceLength = inputSurfaceLength;
    let surfaceWidth = inputSurfaceWidth;

    if (surfaceWidth === 0 && surfaceLength === 0) {
      surfaceWidth = (cols - 1) * spacing + parseInt(baseOffset || 0, 10);
      surfaceLength = (rows - 1) * spacing + parseInt(baseOffset || 0, 10);
    }

    const offsetX = -((cols - 1) / 2) * spacing;
    const offsetZ = -((rows - 1) / 2) * spacing;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let yOffset = 0;
        const highestY = parseInt(highest, 10);
        const lowestY = parseInt(lowest, 10);
        const parseRow = parseInt(rows, 10);
        const parseCol = parseInt(cols, 10);

        if (pattern === "flat") {
          yOffset = 0;
        } else if (pattern === "dome") {
          const rx = r - parseRow / 2;
          const cxOffset = c - parseCol / 2;
          const distance = Math.sqrt(rx * rx + cxOffset * cxOffset);
          const height = (lowestY + highestY) / 2;
          yOffset = height + distance * 10;
        } else if (pattern === "ripple") {
          const rx = r - parseRow / 2;
          const cxOffset = c - parseCol / 2;
          const distance = Math.sqrt(rx * rx + cxOffset * cxOffset);
          yOffset = Math.sin(distance * 0.8) * 20 + 50;
        } else if (pattern === "spiral") {
          const dx = c - parseCol / 2;
          const dy = r - parseRow / 2;
          const angle = Math.atan2(dy, dx);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const height = (lowestY + highestY) / 2;
          yOffset = height + angle * 10 + distance * 5;
        } else if (pattern === "mirror") {
          const dx = c - parseCol / 2;
          const height = (lowestY + highestY) / 2;
          yOffset = height + Math.abs(dx) * 10;
        } else if (pattern === "wave") {
          const mid = (highestY + lowestY) / 2;
          const amplitude = (lowestY - highestY) / 2;
          yOffset =
            mid + (Math.sin(c * 0.5) + Math.cos(r * 0.5)) * amplitude * 0.5;
        } else if (pattern === "diagonal") {
          yOffset =
            lowestY +
            (highestY - lowestY) * ((r + c) / (parseRow + parseCol - 2));
        } else if (pattern === "checkerboard") {
          yOffset = (r + c) % 2 === 0 ? highestY : lowestY;
        } else if (pattern === "random") {
          yOffset = Math.floor(Math.random() * (highestY - lowestY) + lowestY);
        }

        const clone = model.clone();
        clone.position.set(
          offsetX + c * spacing,
          yOffset,
          offsetZ + r * spacing
        );
        clone.rotation.set(0, Math.random() * Math.PI * 2, 0);
        clone.userData.isPendant = true;
        scene.add(clone);

        const stringHeight = surfaceHeight - yOffset;
        const string = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, stringHeight, 8),
          new THREE.MeshStandardMaterial({ color: 0x292929 })
        );
        string.position.set(
          clone.position.x,
          yOffset + stringHeight / 2,
          clone.position.z
        );
        string.userData.isString = true;
        scene.add(string);
      }
    }

    const surfaceMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(surfaceWidth, surfaceLength),
      new THREE.MeshStandardMaterial({
        color: 0x555555,
        side: THREE.DoubleSide,
      })
    );
    surfaceMesh.rotation.x = -Math.PI / 2;
    surfaceMesh.position.set(0, surfaceHeight, 0);
    surfaceMesh.userData.isSurface = true;
    scene.add(surfaceMesh);

    // Add dimension lines
    const camera = cameraRef.current;

    createDimensionLine(
      new THREE.Vector3(-surfaceWidth / 2, 0, surfaceLength / 2),
      new THREE.Vector3(surfaceWidth / 2, 0, surfaceLength / 2),
      `${surfaceWidth.toFixed(0)} mm`,
      scene,
      camera
    );

    createDimensionLine(
      new THREE.Vector3(surfaceWidth / 2, 0, -surfaceLength / 2),
      new THREE.Vector3(surfaceWidth / 2, 0, surfaceLength / 2),
      `${surfaceLength.toFixed(0)} mm`,
      scene,
      camera
    );

    const h = parseInt(surfaceHeight, 10);
    createDimensionLine(
      new THREE.Vector3(surfaceWidth / 2, 0, surfaceLength / 2),
      new THREE.Vector3(surfaceWidth / 2, h, surfaceLength / 2),
      `${h.toFixed(0)} mm`,
      scene,
      camera
    );
  };

  function createDimensionLine(start, end, label, scene, camera) {
    const material = new THREE.LineBasicMaterial({ color: 0xcffadb });
    const points = [start, end];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    dimensionLines.current.push(line);

    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.color = "rgba(0,0,0,0.7)";
    div.style.background = "rgba(255,255,255,0.7)";
    div.style.padding = "2px 6px";
    div.style.borderRadius = "4px";
    div.style.fontSize = "10px";
    div.innerHTML = label;
    document.body.appendChild(div);
    dimensionLabels.current.push(div);

    const updateLabelPosition = () => {
      const midpoint = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5);
      midpoint.project(camera);
      const x = (midpoint.x * 0.5 + 0.6) * window.innerWidth;
      const y = (-midpoint.y * 0.5 + 0.5) * window.innerHeight;
      div.style.left = `${x - div.clientWidth / 2}px`;
      div.style.top = `${y - div.clientHeight / 2}px`;
    };

    function animateLabel() {
      updateLabelPosition();
      requestAnimationFrame(animateLabel);
    }
    animateLabel();
  }

  function clearDimensionLabels() {
    dimensionLabels.current.forEach((label) => {
      if (label && label.parentNode) {
        label.parentNode.removeChild(label);
      }
    });
    dimensionLabels.current = [];
  }

  const handleResize = () => {
    const container = containerRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div ref={containerRef} style={{ flex: 1 }} />;
};

export default ObjFile;
