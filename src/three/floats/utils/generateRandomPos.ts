import { Vector3 } from "three";

/**
 * Generate random Three.Vector3 position
 * @returns THREE.Vector3
 */
export const generateRandomPos = () =>
  new Vector3(
    Math.random() * 180 - 90,
    Math.random() * 180 - 90,
    Math.random() * 40 - 60,
  );
