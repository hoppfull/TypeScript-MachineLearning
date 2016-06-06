interface Array<T> {
    addv(xs0: number[], xs1?: number[], xs2?: number[], xs3?: number[]): number[]
    subv(xs0: number[], xs1?: number[], xs2?: number[], xs3?: number[]): number[]
    divv(xs: number[]): number[]
    mulv(xs: number[]): number[]
    subs(c: number): number[]
    muls(c: number): number[]
    divs(c: number): number[]
    sq(): number[]
    sqrt(): number[]
    avg(): number
    sum(): number
}

Array.prototype.addv = function (xs0, xs1?, xs2?, xs3?) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] + xs0[i] + (xs1 ? xs1[i] : 0) + (xs2 ? xs2[i] : 0) + (xs3 ? xs3[i] : 0)
    return newArray
}

Array.prototype.subv = function (xs0, xs1?, xs2?, xs3?) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] - xs0[i] - (xs1 ? xs1[i] : 0) - (xs2 ? xs2[i] : 0) - (xs3 ? xs3[i] : 0)
    return newArray
}

Array.prototype.divv = function (xs) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] / xs[i]
    return newArray
}

Array.prototype.mulv = function (xs) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] * xs[i]
    return newArray
}

Array.prototype.subs = function (c) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] - c
    return newArray
}

Array.prototype.muls = function (c) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] * c
    return newArray
}

Array.prototype.divs = function (c) {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] / c
    return newArray
}

Array.prototype.sq = function () {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = this[i] ** 2
    return newArray
}

Array.prototype.sqrt = function () {
    let i = this.length
    let newArray: number[] = new Array(i)
    while (i--)
        newArray[i] = Math.sqrt(this[i])
    return newArray
}

Array.prototype.avg = function () {
    let sum = 0
    for (let i = this.length; i--;)
        sum += this[i]
    return sum / this.length
}

Array.prototype.sum = function () {
    let sum = 0
    for (let i = this.length; i--;)
        sum += this[i]
    return sum
}