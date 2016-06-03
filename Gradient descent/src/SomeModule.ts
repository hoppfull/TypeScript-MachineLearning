module SomeModule {
    export function SomeFunction(x:number): number {
        if(x === 0) throw Error
        return x * 2
    }
}