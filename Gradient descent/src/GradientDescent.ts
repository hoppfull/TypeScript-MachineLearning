module GradientDescent {
    type errSig = (xs: number[], ts: number[], y: number) => number
    let err: errSig = (xs, ts, y) =>
        FP.zipReduce((acc, x, t) => acc + x * t, 0, xs, ts) - y

    type costSig = (xs: number[], ts: number[], y: number) => number
    export let cost: costSig = (xs, ts, y) =>
        0.5 * err(xs, ts, y) ** 2

    type costPrimSig = (xs: number[], ts: number[], y: number) => number[]
    export let costPrim: costPrimSig = (xs, ts, y) =>
        xs.map(x => err(xs, ts, y) * x)

}