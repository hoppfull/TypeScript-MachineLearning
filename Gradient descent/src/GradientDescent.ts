module GradientDescent {
    type errSig = (xs: number[], ts: number[], y: number) => number
    let err: errSig = (xs, ts, y) =>
        FP.zipReduce((acc, x, t) => acc + x * t, 0, xs, ts) - y

    type costSig = (xs: number[], ts: number[], y: number) => number
    export const cost: costSig = (xs, ts, y) =>
        err(xs, ts, y) ** 2 / 2

    type costPrimSig = (xs: number[], ts: number[], y: number) => number[]
    export const costPrim: costPrimSig = (xs, ts, y) =>
        xs.map(x => err(xs, ts, y) * x)

    type avgCostSig = (xss: number[][], ts: number[], ys: number[]) => number
    export const avgCost: avgCostSig = (xss, ts, ys) =>
        FP.zipReduce((acc, xs, y) => acc + cost(xs, ts, y), 0, xss, ys) / ys.length

    export function Optimize(xss: number[][], ys: number[], ts: number[]) {
        const X = xss.map(xs => [0].concat(xs))

        for (let i = 0; i < 1000; i++) {

        }
    }
}