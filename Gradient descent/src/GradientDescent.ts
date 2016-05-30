module GradientDescent {
    type HypothesisSig = (xs: number[]) => number
    type DefHypothesisSig = (ws: number[]) => HypothesisSig
    export let DefHypothesis: DefHypothesisSig = ws => xs => {
        if ((ws.length - 1) !== xs.length)
            throw Error("GradientDescent.Hypothesis - range error")
        return ws.slice(1).reduce((acc, w, i) => acc + w * xs[i], ws[0])
    }

    type CostSig = (xs: number[], y: number) => number
    type DefCostSig = (h: HypothesisSig) => CostSig
    export let Cost: DefCostSig = h => (xs, y) => h(xs) - y
}