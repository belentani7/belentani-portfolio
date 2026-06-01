import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PlanetSceneProps {
  onNavigate?: (sectionId: any) => void;
}

export default function PlanetScene({ onNavigate }: PlanetSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const planetRef = useRef<THREE.Mesh | null>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const shipRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 100, 500);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff0033, 2, 200);
    pointLight.position.set(0, 20, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);

    // Create Planet (Neon Red)
    const planetGeometry = new THREE.IcosahedronGeometry(8, 32);
    const planetMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0033,
      emissive: 0xff0033,
      emissiveIntensity: 0.5,
      wireframe: false,
      shininess: 100,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.castShadow = true;
    planet.receiveShadow = true;
    scene.add(planet);
    planetRef.current = planet;

    // Create Rings (Neon Red with glow)
    const ringCount = 4;
    const ringColors = [0xff0033, 0xff1744, 0xff0033, 0xff1744];
    const ringRadii = [15, 20, 26, 32];

    for (let i = 0; i < ringCount; i++) {
      const ringGeometry = new THREE.TorusGeometry(ringRadii[i], 0.5, 32, 200);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: ringColors[i],
        emissive: ringColors[i],
        emissiveIntensity: 0.7,
        wireframe: false,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.random() * 0.5 - 0.25;
      ring.castShadow = true;
      ring.receiveShadow = true;
      scene.add(ring);
      ringsRef.current.push(ring);
    }

    // Create Spaceship (Bioluminescent)
    const shipGroup = new THREE.Group();
    const shipGeometry = new THREE.ConeGeometry(1, 3, 8);
    const shipMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0033,
      emissive: 0xff0033,
      emissiveIntensity: 0.8,
      wireframe: false,
    });
    const shipMesh = new THREE.Mesh(shipGeometry, shipMaterial);
    shipMesh.castShadow = true;
    shipGroup.add(shipMesh);

    // Add glow effect to ship
    const glowGeometry = new THREE.ConeGeometry(1.2, 3.2, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0033,
      transparent: true,
      opacity: 0.3,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    shipGroup.add(glowMesh);

    shipGroup.position.set(30, 0, 0);
    scene.add(shipGroup);
    shipRef.current = shipGroup;

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
    });
    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 500;
      const y = (Math.random() - 0.5) * 500;
      const z = (Math.random() - 0.5) * 500;
      starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(starsVertices), 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate planet
      if (planetRef.current) {
        planetRef.current.rotation.y += 0.0003;
      }

      // Rotate rings
      ringsRef.current.forEach((ring, index) => {
        ring.rotation.z += 0.0001 * (index + 1);
      });

      // Orbit ship
      if (shipRef.current) {
        const time = Date.now() * 0.0001;
        shipRef.current.position.x = Math.cos(time) * 35;
        shipRef.current.position.z = Math.sin(time) * 35;
        shipRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      planetGeometry.dispose();
      planetMaterial.dispose();
      ringsRef.current.forEach((ring) => {
        if (ring.geometry) ring.geometry.dispose();
        if (ring.material instanceof THREE.Material) ring.material.dispose();
      });
      shipGeometry.dispose();
      shipMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
