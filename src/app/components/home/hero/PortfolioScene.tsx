// "use client";

// import { useEffect, useRef } from "react";
// import {
//   AmbientLight,
//   Group,
//   Mesh,
//   MeshBasicMaterial,
//   PerspectiveCamera,
//   PointLight,
//   Scene,
//   SphereGeometry,
//   WebGLRenderer,
// } from "three";

// function PortfolioScene() {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     const scene = new Scene();
//     const camera = new PerspectiveCamera(45, 1, 0.1, 100);
//     camera.position.set(0, 0.2, 8);

//     const renderer = new WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setClearColor(0x000000, 0);
//     mount.appendChild(renderer.domElement);

//     const ambientLight = new AmbientLight(0xffffff, 1.5);
//     scene.add(ambientLight);

//     const keyLight = new PointLight(0x59f7ff, 8, 18);
//     keyLight.position.set(-4, 4, 6);
//     scene.add(keyLight);

//     const accentLight = new PointLight(0xf7b267, 5, 14);
//     accentLight.position.set(4, -2, 5);
//     scene.add(accentLight);

//     const group = new Group();
//     scene.add(group);

//     // Only 12-15 dots - not 60
//     const dotGeometry = new SphereGeometry(0.045, 6, 6);
//     const dotMaterial = new MeshBasicMaterial({ color: 0xd7ff73 });

//     const numberOfDots = 12; // Reduced from 60 to 12

//     for (let i = 0; i < numberOfDots; i++) {
//       const dot = new Mesh(dotGeometry, dotMaterial);
//       const radius = 3.2;
//       const theta = (i / numberOfDots) * Math.PI * 2;
//       const phi = Math.acos(2 * (i / numberOfDots) - 1);
//       dot.position.set(
//         radius * Math.sin(phi) * Math.cos(theta),
//         radius * Math.sin(phi) * Math.sin(theta),
//         radius * Math.cos(phi),
//       );
//       group.add(dot);
//     }

//     const resize = () => {
//       const { width, height } = mount.getBoundingClientRect();
//       camera.aspect = width / Math.max(height, 1);
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     let frameId = 0;
//     let pointerX = 0;
//     let pointerY = 0;

//     const onPointerMove = (event: PointerEvent) => {
//       const rect = mount.getBoundingClientRect();
//       pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.55;
//       pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.4;
//     };

//     mount.addEventListener("pointermove", onPointerMove);

//     const animate = () => {
//       group.rotation.x += (pointerY - group.rotation.x) * 0.04;
//       group.rotation.z += (pointerX - group.rotation.z) * 0.04;
//       group.rotation.y += 0.002;

//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", resize);
//       mount.removeEventListener("pointermove", onPointerMove);
//       dotGeometry.dispose();
//       dotMaterial.dispose();
//       renderer.dispose();
//       renderer.domElement.remove();
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={mountRef}
//         aria-hidden="true"
//         className="pointer-events-auto absolute inset-0 h-full w-full"
//       />
//       <div
//         aria-hidden="true"
//         className="portfolio-model-fallback absolute inset-0 grid place-items-center overflow-hidden"
//       >
//         <div className="absolute h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22),transparent_60%)] blur-2xl" />
//         <div className="relative aspect-square w-[min(78%,31rem)] [perspective:900px]">
//           <div className="portfolio-model-core absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.92),rgba(139,233,255,0.76)_30%,rgba(20,184,166,0.34)_58%,rgba(15,23,42,0.08)_100%)] shadow-[0_28px_80px_rgba(20,184,166,0.26)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(139,233,255,0.72)_28%,rgba(20,184,166,0.28)_56%,rgba(15,23,42,0.12)_100%)]" />
//           <div className="portfolio-model-ring absolute left-[7%] top-[38%] h-[24%] w-[86%] rotate-[-15deg] rounded-[999px] border-[14px] border-teal-700/45 shadow-[0_0_30px_rgba(20,184,166,0.18)] dark:border-teal-200/45" />
//           <div className="portfolio-model-ring portfolio-model-ring-delayed absolute left-[10%] top-[37%] h-[25%] w-[82%] rotate-[20deg] rounded-[999px] border-[10px] border-slate-500/35 dark:border-white/28" />
//           <div className="portfolio-model-ring portfolio-model-ring-slow absolute left-[32%] top-[10%] h-[76%] w-[36%] rotate-[58deg] rounded-[999px] border-[11px] border-cyan-700/40 dark:border-cyan-200/42" />
//           <span className="absolute left-[14%] top-[28%] size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
//           <span className="absolute right-[18%] top-[26%] size-3 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
//           <span className="absolute bottom-[22%] left-[23%] size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default PortfolioScene;


"use client";

import { useEffect, useRef } from "react";
import {
  AmbientLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";

function PortfolioScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.2, 8);

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const ambientLight = new AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new PointLight(0x59f7ff, 8, 18);
    keyLight.position.set(-4, 4, 6);
    scene.add(keyLight);

    const accentLight = new PointLight(0xf7b267, 5, 14);
    accentLight.position.set(4, -2, 5);
    scene.add(accentLight);

    const group = new Group();
    scene.add(group);

    // Define dot material BEFORE using it
    const dotGeometry = new SphereGeometry(0.045, 6, 6);
    const dotMaterial = new MeshBasicMaterial({ color: 0xd7ff73 });
    
    // Random dots - between 12-15 dots at random positions
    const numberOfDots = Math.floor(Math.random() * 4) + 12; // Random between 12-15

    for (let i = 0; i < numberOfDots; i++) {
      const dot = new Mesh(dotGeometry, dotMaterial);
      
      // Random position within a sphere radius of 3.2
      const radius = 3.2;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      dot.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      );
      
      group.add(dot);
    }

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.55;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };

    mount.addEventListener("pointermove", onPointerMove);

    const animate = () => {
      group.rotation.x += (pointerY - group.rotation.x) * 0.04;
      group.rotation.z += (pointerX - group.rotation.z) * 0.04;
      group.rotation.y += 0.002;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      dotGeometry.dispose();
      dotMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        aria-hidden="true"
        className="pointer-events-auto absolute inset-0 h-full w-full"
      />
      <div
        aria-hidden="true"
        className="portfolio-model-fallback absolute inset-0 grid place-items-center overflow-hidden"
      >
        <div className="absolute h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22),transparent_60%)] blur-2xl" />
        <div className="relative aspect-square w-[min(78%,31rem)] [perspective:900px]">
          <div className="portfolio-model-core absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.92),rgba(139,233,255,0.76)_30%,rgba(20,184,166,0.34)_58%,rgba(15,23,42,0.08)_100%)] shadow-[0_28px_80px_rgba(20,184,166,0.26)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(139,233,255,0.72)_28%,rgba(20,184,166,0.28)_56%,rgba(15,23,42,0.12)_100%)]" />
          <div className="portfolio-model-ring absolute left-[7%] top-[38%] h-[24%] w-[86%] rotate-[-15deg] rounded-[999px] border-[14px] border-teal-700/45 shadow-[0_0_30px_rgba(20,184,166,0.18)] dark:border-teal-200/45" />
          <div className="portfolio-model-ring portfolio-model-ring-delayed absolute left-[10%] top-[37%] h-[25%] w-[82%] rotate-[20deg] rounded-[999px] border-[10px] border-slate-500/35 dark:border-white/28" />
          <div className="portfolio-model-ring portfolio-model-ring-slow absolute left-[32%] top-[10%] h-[76%] w-[36%] rotate-[58deg] rounded-[999px] border-[11px] border-cyan-700/40 dark:border-cyan-200/42" />
          <span className="absolute left-[14%] top-[28%] size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
          <span className="absolute right-[18%] top-[26%] size-3 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
          <span className="absolute bottom-[22%] left-[23%] size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
        </div>
      </div>
    </>
  );
}

export default PortfolioScene;