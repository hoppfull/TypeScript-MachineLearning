module GradientDescent {
    type errSig = (xs: number[], ws: number[], y: number) => number
    const err: errSig = (xs, ws, y) =>
        FP.zipReduce((acc, x, w) => acc + x * w, 0, xs, ws) - y

    type costSig = (xs: number[], ws: number[], y: number) => number
    export const cost: costSig = (xs, ws, y) =>
        err(xs, ws, y) ** 2 / 2

    type costPrimSig = (xs: number[], ws: number[], y: number) => number[]
    export const costPrim: costPrimSig = (xs, ws, y) =>
        xs.map(x => err(xs, ws, y) * x)

    type avgCostSig = (xss: number[][], ws: number[], ys: number[]) => number
    export const avgCost: avgCostSig = (xss, ws, ys) =>
        FP.zipReduce((acc, xs, y) => acc + cost(xs, ws, y), 0, xss, ys) / ys.length

    type avgCostPrimSig = (xss: number[][], ws: number[], ys: number[]) => number[]
    export const avgCostPrim: avgCostPrimSig = (xss, ws, ys) =>
        FP.zipReduce((acc, xs, y) => acc.addv(costPrim(xs, ws, y)), FP.zeros(ws.length), xss, ys).divs(ys.length)

    type stdSig = (ns: number[]) => number
    export const std: stdSig = ns => {
        const avg = ns.avg()
        return Math.sqrt(ns.reduce((acc, n) => acc + ((n - avg) ** 2), 0) / ns.length)
    }

    type featureScaleSig = { mu: number[], sigma: number[] }
    type featureAvgAndStdSig = (xss: number[][]) => featureScaleSig
    export const featureAvgAndStd: featureAvgAndStdSig = xss => {
        const mu = LA.columnAvgs(xss)
        const sigma = xss
            .reduce((acc, xs) => FP.zipMap((a, x, m) => a + (x - m) ** 2, acc, xs, mu), FP.zeros(xss[0].length))
            .map(x => Math.sqrt(x / xss.length))
        return { mu, sigma }
    }

    type featurePreprocessingSig = (xss: number[][], {mu, sigma}: featureScaleSig) => number[][]
    export const featurePreprocessing: featurePreprocessingSig = (xss, {mu, sigma}) =>
        xss.map(xs => FP.zipMap((x, m, s) => (x - m) / s, xs, mu, sigma))

    type weightPostprocessingSig = (ws: number[], {mu, sigma}: featureScaleSig) => number[]
    export const weightPostprocessing: weightPostprocessingSig = (ws, {mu, sigma}) => {
        const wt = ws.slice(1).divv(sigma)
        const wh = ws[0] - wt.mulv(mu).sum()
        return [wh].concat(wt)
    }

    export function Optimize(xss: number[][], ys: number[], ws: number[]) {
        const X = xss.map(xs => [1].concat(xs))

        for (let i = 50; i--;)
            ws = ws.subv(avgCostPrim(X, ws, ys).muls(0.5))
        return ws
    }
}
