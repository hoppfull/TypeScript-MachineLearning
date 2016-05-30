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

    type SquaredErrorSig = (xs: number[], y: number) => number
    type DefSquaredErrorSig = (h: HypothesisSig) => SquaredErrorSig
    export let DefSquaredError: DefSquaredErrorSig = h => (xs, y) => (h(xs) - y)**2
    
    type CostSig = (ws: number[]) => number
    type DefCostSig = (xss:number[][], ys:number[]) => CostSig
    export let DefCost:DefCostSig = (xss, ys) => {
        if (xss.length !== ys.length)
            throw Error("GradientDescent.DefCost: xss.length !== ys.length")
        return ws => {
            let h = DefHypothesis(ws)
            let error = DefSquaredError(h)
            let sumSquared = xss.reduce((acc, xs, i) => acc + error(xs, ys[i]), 0)
            let avg = sumSquared / ys.length
            return avg
        }
    }
}
