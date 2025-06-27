// src/components/ObjFile.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ObjFile = ({ config }) => {
  const containerRef = useRef();
  const sceneRef = useRef(new THREE.Scene());
  const modelRef = useRef(null); // Store loaded model
  const rendererRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // SCENE
    const scene = sceneRef.current;
    scene.clear();
    scene.background = new THREE.Color(0xc7c7c7);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 100, 300);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(ambientLight, directionalLight);

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 100, 0);

    // ANIMATE
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // LOAD MODEL
    const loader = new OBJLoader();
    loader.load(
      '/models/myModel.obj',
      (obj) => {
        modelRef.current = obj;
        updateSceneWithConfig(); // Initial placement
      },
      undefined,
      (err) => console.error('OBJ load error:', err)
    );

    // CLEANUP
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  // 📦 Generate grid from config when it changes
  useEffect(() => {
    if (modelRef.current) {
      updateSceneWithConfig();
    }
  }, [config]);

  const updateSceneWithConfig = () => {
    const scene = sceneRef.current;
    const model = modelRef.current.clone();
    model.scale.set(1, 1, 1);

    // Clear previous pendants
    scene.children = scene.children.filter(obj => !obj.userData?.isPendant);

    const {
      rows,
      cols,
      spacing,
      pattern,
      surfaceHeight,
      lowest,
      highest
    } = config;

    const offsetX = -((cols - 1) / 2) * spacing;
    const offsetZ = -((rows - 1) / 2) * spacing;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let yOffset = surfaceHeight;

        if (pattern === 'flat') {
          yOffset = surfaceHeight;
        } else if (pattern === 'wave') {
          const mid = (highest + lowest) / 2;
          const amplitude = (lowest - highest) / 2;
          yOffset = mid + (Math.sin(c * 0.5) + Math.cos(r * 0.5)) * amplitude * 0.5;
        } else if (pattern === 'diagonal') {
          yOffset = lowest + (highest - lowest) * ((r + c) / (rows + cols - 2));
        } else if (pattern === 'checkerboard') {
          yOffset = ((r + c) % 2 === 0 ? highest : lowest);
        } else if (pattern === 'random') {
          yOffset = Math.floor(Math.random() * (highest - lowest) + lowest);
        }

        const clone = model.clone();
        clone.position.set(offsetX + c * spacing, yOffset, offsetZ + r * spacing);
        clone.userData.isPendant = true;
        scene.add(clone);
      }
    }
  };

  const handleResize = () => {
    const container = containerRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={containerRef} style={{ flex: 1 }} />;
};

export default ObjFile;
