module GradientDescent {
    type HypothesisSig = (xs: number[]) => number
    type DefHypothesisSig = (ws: number[]) => HypothesisSig
    export let DefHypothesis: DefHypothesisSig = ws => {
        if (ws.length < 1)
            throw Error("GradientDescent.Hypothesis: ws.length < 1")
        return xs => {
            if (ws.length !== xs.length + 1)
                throw Error("GradientDescent.Hypothesis: ws.length !== xs.length + 1")
            return ws.slice(1).reduce((acc, w, i) => acc + w * xs[i], ws[0])
        }
    }

    type CostSig = (xs: number[], y: number) => number
    type DefCostSig = (h: HypothesisSig) => CostSig
    export let DefCost: DefCostSig = h => (xs, y) => h(xs) - y
}