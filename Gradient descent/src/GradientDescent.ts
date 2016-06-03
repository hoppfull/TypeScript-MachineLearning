module GradientDescent {
    type errSig = (xss: number[][], ys: number[], ts: number[]) => number[]
    let err: errSig = (xss, ys, ts) =>
        xss.map((xs, i) => xs.reduce((acc, x, j) => acc + x*ts[j] - ys[i], 0))
}