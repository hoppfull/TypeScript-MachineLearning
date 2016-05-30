module GradientDescent {
    type HypothesisSig = (ws: number[]) => (ins: number[]) => number
    export let Hypothesis: HypothesisSig = ws => ins => {
        if ((ws.length - 1) !== ins.length)
            throw Error("GradientDescent.Evaluate(ins, ws) - range error")
        return ws.slice(1).reduce((acc, w, i) => acc + w * ins[i], ws[0])
    }
}