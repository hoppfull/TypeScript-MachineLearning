module Program {
    export function Run(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d')
        Plotting.Init(ctx)
        Plotting.PlotLine(1, 50, 'green')
        Plotting.DrawPoint(5, 5, 'chartreuse')
        Plotting.DrawPoint(50, 10, 'red')
        Plotting.DrawPoint(-120, 70, 'cyan')
        Plotting.DrawCross(-100, -200, 10, 5, 'black')
    }
}