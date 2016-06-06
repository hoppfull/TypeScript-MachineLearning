module Program {
    export function Run(canvas: HTMLCanvasElement) {
        Plotting.Init(canvas.getContext('2d'))
        let m = 300
        let xss = FP.rangeMap(m, i => [-150 + i * 1 + Math.random() * 30])
        let ys = FP.rangeMap(m, i => -30 + i * 0.2 + Math.random() * 100)
        //let ys = FP.rangeMap(m, i => -30 + i * -2 + Math.random() * 20)
        //let ys = FP.rangeMap(m, i => -50 + i * 0 + Math.random() * 20)
        
        FP.zipMap((xs, y) => {
            Plotting.DrawPoint(xs[0], y, 'cyan')
        }, xss, ys)

        let scale = GradientDescent.featureAvgAndStd(xss)

        let ts = GradientDescent.Optimize(GradientDescent.featurePreprocessing(xss, scale), ys, [0, 0])
        let ws = GradientDescent.weightPostprocessing(ts, scale)

        Plotting.PlotLine(ws[1], ws[0], 'chartreuse')
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
