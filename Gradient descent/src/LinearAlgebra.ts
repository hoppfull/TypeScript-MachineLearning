interface Array<T> {
    add(xs0: number[], xs1?: number[], xs2?: number[], xs3?: number[]): number[]
    sub(xs0: number[], xs1?: number[], xs2?: number[], xs3?: number[]): number[]
    mul(c: number): number[]
    div(c: number): number[]
}

Array.prototype.add = function (xs0, xs1?, xs2?, xs3?) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] + xs0[i] + (xs1 ? xs1[i] : 0) + (xs2 ? xs2[i] : 0) + (xs3 ? xs3[i] : 0)
    return newArray
}

Array.prototype.sub = function (xs0, xs1?, xs2?, xs3?) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] - xs0[i] - (xs1 ? xs1[i] : 0) - (xs2 ? xs2[i] : 0) - (xs3 ? xs3[i] : 0)
    return newArray
}

Array.prototype.mul = function (c) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] * c
    return newArray
}

Array.prototype.div = function (c) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] / c
    return newArray
}
