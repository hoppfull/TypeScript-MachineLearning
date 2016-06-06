module LA {
    type columnAvgsSig = (xss: number[][]) => number[]
    export const columnAvgs: columnAvgsSig = xss =>
        xss.reduce((acc, xs) => acc.addv(xs), FP.zeros(xss[0].length))
            .divs(xss.length)
}