declare module numeric {
    function linspace(start: number, end: number, count: number): number[][]
    function linspace(start: number, end: number): number[][]
    function random(dims: number[]): number[][]

    function dot(M0: number[][], M1: number[][]): number[][]
    function dot(M: number[][], v: number[]): number[]
    function dot(v: number[], M: number[][]): number[]
    function dot(v0: number[], v1: number[]): number
    function add(v0: number[], v1: number[]): number[]
    function add(c: number, v: number[]): number[]
    function sub(v0: number[], v1: number[]): number[]
    function abs(v: number[]): number[]
    function pow(v0: number[], v1: number[]): number[]
    function sqrt(v: number[]): number[]
    function neg(v: number[]): number[]
    function transpose(M: number[][]): number[][]
    function sum(M: number[][]): number
    function sum(v: number[]): number

    function dim(v: number[]): number[]
    function dim(M: number[][]): number[]

    function prettyPrint(M: number[][]): string
    function prettyPrint(v: number[]): string
}