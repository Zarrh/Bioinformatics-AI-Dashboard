import { multiply, add, map } from 'mathjs'
import { σ, toColumnVector } from '../functions'


export class DigitsRecognitionNN {
  
  constructor(sizes, weights, biases) {
    this.sizes = sizes
    this.W = weights
    this.B = biases
  }


  y(x) {
    let a = toColumnVector(x)
    for (let i = 0; i < this.W.length; i++) {
      const w = this.W[i]
      const b = this.B[i]
      const z = add(multiply(w, a), b)
      a = map(z, σ)
    }
    return a
  }
}