module FP {
    export function zipMap<T0, T1, T2, T3, T4, T>(
        f: (x0: T0, x1?: T1, x2?: T2, x3?: T3, x4?: T4) => T,
        xs0: T0[], xs1?: T1[], xs2?: T2[], xs3?: T3[], xs4?: T4[]): T[] {

        let i = xs0.length
        let newArray: T[] = new Array(i)
        while (i--)
            newArray[i] = f(xs0[i], xs1 ? xs1[i] : null, xs2 ? xs2[i] : null, xs3 ? xs3[i] : null, xs4 ? xs4[i] : null)
        return newArray
    }

    export function zipReduce<T0, T1, T2, T3, T4, T>(
        f: (acc: T, x0: T0, x1?: T1, x2?: T2, x3?: T3, x4?: T4) => T,
        acc: T, xs0: T0[], xs1?: T1[], xs2?: T2[], xs3?: T3[], xs4?: T4[]): T {

        for (let i = xs0.length; i--;)
            acc = f(acc, xs0[i], xs1 ? xs1[i] : null, xs2 ? xs2[i] : null, xs3 ? xs3[i] : null, xs4 ? xs4[i] : null)
        return acc
    }

    export function range(i: number): number[] {
        let newArray: number[] = new Array(i)
        while (i--)
            newArray[i] = i
        return newArray
    }

    export function rangeMap<T>(i: number, f: (i: number) => T): T[] {
        let newArray: T[] = new Array(i)
        while (i--)
            newArray[i] = f(i)
        return newArray
    }

    export function zeros(i: number): number[] {
        let newArray: number[] = new Array(i)
        while (i--)
            newArray[i] = 0
        return newArray
    }
}