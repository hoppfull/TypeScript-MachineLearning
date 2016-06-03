module Program {
    export function Run(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d')
        flipCanvasYAxis(ctx)
        
        const n = 30

        const xss = (<number[][]>Array.apply(null, Array(n)))
            .map((_, i) => [40 + i * canvas.width / (n * 1.2) + Math.random() * 20])

        const ys = (<number[]>Array.apply(null, Array(n)))
            .map((_, i) => 50 + i * canvas.height / (n * 2) + Math.random() * 80)

        xss.forEach((xs, i) => drawPoint(ctx, xs[0], ys[i]))
    }

    function flipCanvasYAxis(ctx: CanvasRenderingContext2D) {
        ctx.scale(1, -1)
        ctx.translate(0, -ctx.canvas.height)
    }

    function drawLine(ctx: CanvasRenderingContext2D, k: number, m: number) {
        ctx.strokeStyle = "red"
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.moveTo(0, m)
        ctx.lineTo(ctx.canvas.width, ctx.canvas.width * k)
        ctx.stroke()
    }

    function drawPoint(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.fillStyle = "chartreuse"
        ctx.strokeStyle = "darkslategray"
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fill()
    }

    export function RunTests() {
    }
}
