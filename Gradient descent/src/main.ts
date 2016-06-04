module Program {
    export function Run(canvas: HTMLCanvasElement) {
        Plotting.Init(canvas.getContext('2d'))
        
    }

    export function RunTests() {
        GradientDescent.Tests.RunAll()
    }
}