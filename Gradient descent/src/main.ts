module Program {
    export function Run(canvas: HTMLCanvasElement) {
        Plotting.Init(canvas.getContext('2d'))
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
