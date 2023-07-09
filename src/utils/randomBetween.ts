/**
 * Returns random number between min and max.
 * @param min minimum number
 * @param max maximum number
 * @returns random number
 */
export const randomBetween = (min: number, max: number) => {
  const range = max - min;
  return Math.random() * range + min;
};
