module GradientDescent {
    type errSig = (xss: number[][], ys: number[], ts: number[]) => number[]
    export let err: errSig = (xss, ys, ts) =>
        numeric.sub(numeric.dot(xss, ts), ys)
}