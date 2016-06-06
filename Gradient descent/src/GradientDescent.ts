module GradientDescent {
    type errSig = (xs: number[], ts: number[], y: number) => number
    const err: errSig = (xs, ts, y) =>
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

    type avgCostPrimSig = (xss: number[][], ts: number[], ys: number[]) => number[]
    export const avgCostPrim: avgCostPrimSig = (xss, ts, ys) =>
        FP.zipReduce((acc, xs, y) => acc.add(costPrim(xs, ts, y)), FP.zeros(ts.length), xss, ys).div(ys.length)

    export function Optimize(xss: number[][], ys: number[], ts: number[]) {
        const X = xss.map(xs => [1].concat(xs))

        for (let i = 1000; i--;)
            ts = ts.sub(avgCostPrim(X, ts, ys).mul(0.1))
        return ts
    }
}
