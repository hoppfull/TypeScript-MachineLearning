module Program {
    export function Run(canvas: HTMLCanvasElement) {
        Plotting.Init(canvas.getContext('2d'))
        let xs = FP.range(1000)
        let ts = FP.range(1000)

        let tCost = benchmark(() => { GradientDescent.cost(xs, ts, 10) })
        let tCostPrim = benchmark(() => { GradientDescent.costPrim(xs, ts, 10) })

        console.log("ms for cost:", tCost)
        console.log("ms for costPrim:", tCostPrim)
    }

    export function RunTests() {
        GradientDescent.Tests.RunAll()
    }

    export function benchmark(f: () => void): number {
        let n = 100
        let t0 = new Date().getTime()
        for (let i = n; i--;) f()
        return (new Date().getTime() - t0) / n
    }
}
