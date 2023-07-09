import { Vector3 } from "three";
import type { ClockRingProps } from "../ClockRing";
import type { ClockSphereProps } from "../ClockSphere";

/**
 * Properties of ClockRing's rings
 */
export const RING_PROPS: ClockRingProps[] = [
  {
    innerRadius: 31.9,
    outerRadius: 32,
    pos: new Vector3(-0.3, 1.4, 2),
  },
  {
    innerRadius: 30.9,
    outerRadius: 31,
    pos: new Vector3(1, 0, 2),
  },
  {
    innerRadius: 29.9,
    outerRadius: 30,
    pos: new Vector3(0.7, 4.6, 2),
  },
];

/**
 * Properties of ClockRing's rings
 */
export const SPHERE_PROPS: ClockSphereProps[] = [
  {
    radius: 3,
    widthSeg: 8,
    heightSeg: 8,
    pos: new Vector3(28.8, 11.5, 5),
    speed: 1.2,
  },
  {
    radius: 1.6,
    widthSeg: 6,
    heightSeg: 6,
    pos: new Vector3(-28.2, 6.6, 5),
    speed: 1,
  },
  {
    radius: 1.4,
    widthSeg: 6,
    heightSeg: 6,
    pos: new Vector3(-8.4, -28.5, 5),
    speed: 1.5,
  },
];
