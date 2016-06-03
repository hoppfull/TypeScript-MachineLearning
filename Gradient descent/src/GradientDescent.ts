module GradientDescent {
    type errSig = (xss: number[][], ys: number[], ts: number[]) => number[]
    export let err: errSig = (xss, ys, ts) =>
        xss.map((xs, i) => ts.slice(1).reduce((a, t, j) => a + t * xs[j], ts[0] - ys[i]))
}