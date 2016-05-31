module GradientDescent {
    type hSig = (xs: number[], ws: number[]) => number
    const h: hSig = (ws, xs) => xs.reduce((acc, x, i) => acc + x * ws[i + 1], ws[0])

    type JSig = (ws: number[], xss: number[][], ys: number[]) => number
    const J: JSig = (ws, xss, ys) =>
        xss.reduce((acc, xs, i) => acc + (h(ws, xs) - ys[i]) ** 2, 0) / (2 * xss.length)

    type JPrimSig = (ws: number[], xss: number[][], ys: number[]) => number[]
    const JPrim: JPrimSig = (ws, xss, ys) =>
        ws.map((_, j) => 0.00001 * xss.reduce((acc, xs, i) => acc + (h(ws, xs) - ys[i]) * (j === 0 ? 1 : xs[j - 1]), 0) / xss.length)

    type OptimizeSig = (xss: number[][], ys: number[], ws: number[], precision: number) => number[]
    export const Optimize: OptimizeSig = (xss, ys, ws, precision) => {
        let ws_: number[] = ws
        for (let i = 1000; --i && J(ws_, xss, ys) > precision;)
            ws_ = ws_.map((w, j) => w - JPrim(ws_, xss, ys)[j])
        console.log("error: " + J(ws_, xss, ys))
        console.log(JPrim(ws_, xss, ys))
        return ws_
    }
}

module GradientDescent2 {
    type hSig = (xs: number[], ws: number[]) => number
    const h: hSig = (ws, xs) => {
        console.assert(ws.length === xs.length)

        let sum = 0
        for (let i = 0; i < ws.length; i++)
            sum += ws[i] * xs[i]
        return sum
    }

    type JSig = (ws: number[], xss: number[][], ys: number[]) => number
    const J: JSig = (ws, xss, ys) => {
        console.assert(ws.length === xss[0].length && xss.length == ys.length)
        const m = xss.length
        let sum = 0

        for (let i = 0; i < m; i++)
            sum += Math.pow(h(ws, xss[i]) - ys[i], 2)
        return sum / (2 * m)
    }

    type JPrimSig = (ws: number[], xss: number[][], ys: number[]) => number[]
    const JPrim: JPrimSig = (ws, xss, ys) => {
        const n = ws.length
        const m = xss.length
        const dws = new Array(n)

        for (let j = 0; j < n; j++) {
            let sum = 0
            for (let i = 0; i < m; i++)
                sum += (h(ws, xss[i]) - ys[i]) * xss[i][j]
            dws[j] = 0.00001 * sum / (m)
        }
        return dws
    }

    type OptimizeSig = (xss: number[][], ys: number[], ws: number[], precision: number) => number[]
    export const Optimize: OptimizeSig = (xss, ys, ws, precision) => {
        const xss_ = xss.map(xs => [1].concat(xs))
        let ws_: number[] = ws
        for (let i = 1000; --i && J(ws_, xss_, ys) > precision;)
            ws_ = ws_.map((w, j) => w - JPrim(ws_, xss_, ys)[j])
        console.log("error: " + J(ws_, xss_, ys))
        console.log(JPrim(ws_, xss_, ys))
        return ws_
    }
}