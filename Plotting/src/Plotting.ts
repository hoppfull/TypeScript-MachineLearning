module Plotting {
    let c: CanvasRenderingContext2D = null

    export function Init(context: CanvasRenderingContext2D) {
        c = context
        c.scale(1, -1)
        c.translate(c.canvas.width / 2, -c.canvas.height / 2)

        const w = c.canvas.width / 2
        const h = c.canvas.height / 2

        DrawCross(0, 0, w, h, 'gray')
    }

    export function PlotLine(k: number, m: number, color: string) {
        if (!c) throw Error("Plotting is not initialized!")
        c.strokeStyle = color
        c.lineWidth = 2

        const w = c.canvas.width

        c.beginPath()
        c.moveTo(-w / 2, -k * w / 2 + m)
        c.lineTo(w / 2, k * w / 2 + m)
        c.stroke()
    }

    export function DrawPoint(x: number, y: number, color: string) {
        if (!c) throw Error("Plotting is not initialized!")
        c.fillStyle = color
        c.strokeStyle = 'black'
        c.lineWidth = 1

        c.beginPath()
        c.arc(x, y, 2, 0, 2 * Math.PI)
        c.stroke()
        c.fill()
    }

    export function DrawCross(x: number, y: number, w: number, h: number, color: string) {
        if (!c) throw Error("Plotting is not initialized!")
        c.strokeStyle = color
        c.lineWidth = 1

        c.beginPath()
        c.moveTo(x - w, y)
        c.lineTo(x + w, y)
        c.stroke()

        c.beginPath()
        c.moveTo(x, y - h)
        c.lineTo(x, y + h)
        c.stroke()
    }
}