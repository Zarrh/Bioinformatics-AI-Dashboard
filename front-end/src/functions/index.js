export function argMax(arr) {
  return arr.indexOf(Math.max(...arr))
}


export function σ(x) {
  return 1 / (1 + Math.exp(-x))
}


export function toColumnVector(arr) {
  return arr.map(value => [value])
}


export function toRowVector(arr) {
  return arr.map(row => row[0])
}