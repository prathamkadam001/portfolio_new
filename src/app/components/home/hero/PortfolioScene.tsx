"use client"

import { useEffect, useRef } from "react"
import {
  AmbientLight,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  TorusKnotGeometry,
  WebGLRenderer,
} from "three"

function PortfolioScene() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new Scene()
    const camera = new PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0.2, 8)

    const renderer = new WebGLRenderer({
      antialias: false,
      alpha: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    })
    renderer.setClearAlpha(0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25))
    mount.appendChild(renderer.domElement)

    const ambientLight = new AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const keyLight = new PointLight(0x59f7ff, 8, 18)
    keyLight.position.set(-4, 4, 6)
    scene.add(keyLight)

    const accentLight = new PointLight(0xf7b267, 5, 14)
    accentLight.position.set(4, -2, 5)
    scene.add(accentLight)

    const group = new Group()
    scene.add(group)

    const shellGeometry = new TorusKnotGeometry(1.65, 0.16, 96, 12)
    const shellMaterial = new MeshStandardMaterial({
      color: 0x8be9ff,
      metalness: 0.38,
      roughness: 0.22,
    })
    const shell = new Mesh(shellGeometry, shellMaterial)
    shell.rotation.x = 0.7
    group.add(shell)

    const wireGeometry = new IcosahedronGeometry(2.35, 1)
    const wireMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    })
    const wire = new Mesh(wireGeometry, wireMaterial)
    group.add(wire)

    const dotGeometry = new SphereGeometry(0.035, 8, 8)
    const dotMaterial = new MeshBasicMaterial({ color: 0xd7ff73 })
    const dots = new Group()

    for (let index = 0; index < 36; index += 1) {
      const dot = new Mesh(dotGeometry, dotMaterial)
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
