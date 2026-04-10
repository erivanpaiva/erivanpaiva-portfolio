"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 3.8;

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    globeGroup.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.998, 64, 64),
        new THREE.MeshBasicMaterial({ color: 0x080a05 }),
      ),
    );

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.06,
    });

    for (let lat = -75; lat <= 75; lat += 15) {
      const pts: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 2) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = lng * (Math.PI / 180);
        pts.push(
          new THREE.Vector3(
            -Math.sin(phi) * Math.cos(theta),
            Math.cos(phi),
            Math.sin(phi) * Math.sin(theta),
          ),
        );
      }
      globeGroup.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat),
      );
    }

    for (let lng = 0; lng < 360; lng += 20) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 2) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = lng * (Math.PI / 180);
        pts.push(
          new THREE.Vector3(
            -Math.sin(phi) * Math.cos(theta),
            Math.cos(phi),
            Math.sin(phi) * Math.sin(theta),
          ),
        );
      }
      globeGroup.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat),
      );
    }

    fetch(
      "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson",
    )
      .then((r) => r.json())
      .then((data) => {
        data.features.forEach((feature: any) => {
          const { type, coordinates } = feature.geometry;
          const rings = type === "Polygon" ? [coordinates] : coordinates;

          rings.forEach((polygon: any) => {
            const outer = polygon[0] as [number, number][];

            let minLat = 90,
              maxLat = -90,
              minLng = 180,
              maxLng = -180;
            outer.forEach(([lng, lat]) => {
              if (lat < minLat) minLat = lat;
              if (lat > maxLat) maxLat = lat;
              if (lng < minLng) minLng = lng;
              if (lng > maxLng) maxLng = lng;
            });

            const step = 1.2;
            const sharedGeo = new THREE.SphereGeometry(0.004, 3, 2);
            const sharedMat = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.3,
            });

            for (let lat = minLat; lat <= maxLat; lat += step) {
              for (let lng = minLng; lng <= maxLng; lng += step) {
                let inside = false;
                for (
                  let i = 0, j = outer.length - 1;
                  i < outer.length;
                  j = i++
                ) {
                  const [xi, yi] = outer[i];
                  const [xj, yj] = outer[j];
                  const intersect =
                    yi > lat !== yj > lat &&
                    lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
                  if (intersect) inside = !inside;
                }
                if (!inside) continue;

                const phi = (90 - lat) * (Math.PI / 180);
                const theta = (lng + 180) * (Math.PI / 180);
                const r = 1.002;

                const dot = new THREE.Mesh(sharedGeo, sharedMat);
                dot.position.set(
                  -r * Math.sin(phi) * Math.cos(theta),
                  r * Math.cos(phi),
                  r * Math.sin(phi) * Math.sin(theta),
                );
                globeGroup.add(dot);
              }
            }
          });
        });
      });

    scene.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 64, 64),
        new THREE.MeshBasicMaterial({
          color: 0xa3e635,
          transparent: true,
          opacity: 0.025,
          side: THREE.BackSide,
        }),
      ),
    );

    function toVec3(lat: number, lng: number, r = 1.012): THREE.Vector3 {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      );
    }

    const brazilPos = toVec3(-3.7172, -38.5434);

    const pin = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xa3e635 }),
    );
    pin.position.copy(brazilPos);
    globeGroup.add(pin);

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa3e635,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.03, 0.044, 32),
      ringMat,
    );
    ring.position.copy(brazilPos);
    ring.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(ring);

    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa3e635,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });
    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(0.052, 0.065, 32),
      ring2Mat,
    );
    ring2.position.copy(brazilPos);
    ring2.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(ring2);
    globeGroup.rotation.y = 5.7;

    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.0015;

      const pulse = Math.sin(Date.now() / 600);
      const s = 1 + pulse * 0.25;
      ring.scale.set(s, s, s);
      ringMat.opacity = 0.5 - pulse * 0.2;
      const s2 = 1 + pulse * 0.4;
      ring2.scale.set(s2, s2, s2);
      ring2Mat.opacity = 0.12 - pulse * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
