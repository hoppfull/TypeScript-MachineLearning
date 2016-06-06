module Program {
    export function Run(canvas: HTMLCanvasElement) {
        Plotting.Init(canvas.getContext('2d'))
        let xss = [[3], [5]]
        let ys = [5, 4]
        let os = [-0.5, 6.5]

        Plotting.PlotLine(os[0], os[1], 'green')
        Plotting.DrawPoint(xss[0][0], ys[0], 'blue')
        Plotting.DrawPoint(xss[0][1], ys[1], 'blue')

        let ts = GradientDescent.Optimize(xss, ys, [0, 0])
        console.log(ts)
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
