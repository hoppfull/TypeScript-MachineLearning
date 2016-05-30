module GradientDescent {
    type HypothesisSig = (xs: number[]) => number
    type DefHypothesisSig = (ws: number[]) => HypothesisSig
    export let DefHypothesis: DefHypothesisSig = ws => {
        if (ws.length < 1)
            throw Error("GradientDescent.DefHypothesis: ws.length < 1")
        return xs => {
            if (ws.length !== xs.length + 1)
                throw Error("GradientDescent.Hypothesis: ws.length !== xs.length + 1")
            return ws.slice(1).reduce((acc, w, i) => acc + w * xs[i], ws[0])
        }
    }

    type ErrorSig = (xs: number[], y: number) => number
    type DefErrorSig = (h: HypothesisSig) => ErrorSig
    export let DefError: DefErrorSig = h => (xs, y) => h(xs) - y

    type CostSig = (ws: number[]) => number
    type DefCostSig = (xss: number[][], ys: number[]) => CostSig
    export let DefCost: DefCostSig = (xss, ys) => {
        if (xss.length !== ys.length)
            throw Error("GradientDescent.DefCost: xss.length !== ys.length")
        return ws => {
            let h = DefHypothesis(ws)
            let error = DefError(h)
            let sum = xss.reduce((acc, xs, i) => acc + error(xs, ys[i]) ** 2, 0)
            let avg = sum / (2 * ys.length)
            return avg
        }
    }

    type CostDerivativeSig = (ws: number[], j: number) => number
    type DefCostDerivativeSig = (xss: number[][], ys: number[]) => CostDerivativeSig
    export let DefCostDerivative: DefCostDerivativeSig = (xss, ys) => {
        if (xss.length !== ys.length)
            throw Error("GradientDescent.DefCostDerivative: xss.length !== ys.length")
        return (ws, j) => {
            if (j < 0 || j > ws.length - 1)
                throw Error("GradientDescent.CostDerivative: j < 0 || j > ws.length - 1")
            let h = DefHypothesis(ws)
            let error = DefError(h)
            let sum = xss.reduce((acc, xs, i) => acc + error(xs, ys[i]) * ([1].concat(xs))[j], 0)
            let avg = sum / (ys.length)

            return avg
        }
    }
}
