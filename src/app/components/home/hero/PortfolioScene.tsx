"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

function PortfolioScene() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0.2, 8)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    })
    renderer.setClearAlpha(0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    mount.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const keyLight = new THREE.PointLight(0x59f7ff, 10, 18)
    keyLight.position.set(-4, 4, 6)
    scene.add(keyLight)

    const accentLight = new THREE.PointLight(0xf7b267, 7, 14)
    accentLight.position.set(4, -2, 5)
    scene.add(accentLight)

    const group = new THREE.Group()
    scene.add(group)

    const shellGeometry = new THREE.TorusKnotGeometry(1.65, 0.16, 180, 18)
    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8be9ff,
      metalness: 0.45,
      roughness: 0.18,
      transmission: 0.2,
      thickness: 0.6,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    })
    const shell = new THREE.Mesh(shellGeometry, shellMaterial)
    shell.rotation.x = 0.7
    group.add(shell)

    const wireGeometry = new THREE.IcosahedronGeometry(2.35, 1)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    })
    const wire = new THREE.Mesh(wireGeometry, wireMaterial)
    group.add(wire)

    const dotGeometry = new THREE.SphereGeometry(0.035, 12, 12)
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xd7ff73 })
    const dots = new THREE.Group()

    for (let index = 0; index < 70; index += 1) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial)
      const radius = 2.8 + Math.random() * 1.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      dot.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      )
      dots.add(dot)
    }

    group.add(dots)

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    resize()
    window.addEventListener("resize", resize)

    let frameId = 0
    let pointerX = 0
    let pointerY = 0
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.55
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.4
    }

    mount.addEventListener("pointermove", onPointerMove)

    const animate = () => {
      if (!prefersReducedMotion) {
        group.rotation.y += 0.003
        shell.rotation.z += 0.004
        dots.rotation.y -= 0.0015
      }

      group.rotation.x += (pointerY - group.rotation.x) * 0.04
      group.rotation.z += (pointerX - group.rotation.z) * 0.04
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      mount.removeEventListener("pointermove", onPointerMove)
      shellGeometry.dispose()
      shellMaterial.dispose()
      wireGeometry.dispose()
      wireMaterial.dispose()
      dotGeometry.dispose()
      dotMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  )
}

export default PortfolioScene
