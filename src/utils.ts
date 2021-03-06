export const compareFloat = (
  a: number,
  b: number,
  EPSILON = 0.00001
): boolean => Math.abs(a - b) < EPSILON

export const pow2 = (value: number): number => {
  return Math.pow(value, 2)
}

export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

export function toFixed(value: number, decimals = 5): number {
  return Number(value.toFixed(decimals))
}
