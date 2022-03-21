export const selectRandom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)]
