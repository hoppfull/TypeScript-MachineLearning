module UnitTesting {
    type UnitTestSig = (msg: string) => boolean
    type MsgGenSig = () => string
    type AsserterSig = (b: boolean) => boolean
    type ErrorTesterSig = (f: () => void) => boolean

    export let IgnoreErrorTesting = false

    function report(b: boolean, msg1: string, msg2: string, color: string) {
        if (b) console.log(`%c${msg1} - ${msg2}`, `background:yellow;color:${color};`)
        return b
    }

    function assert(msg: string, test: boolean) {
        return !report(!test, msg, "Test failed!", 'red')
    }

    function assertFailure(msg: string, f: () => void) {
        if (IgnoreErrorTesting) return true
        try { f() } catch (e) { return true }
        return !report(true, msg, "Test should have thrown error!", 'blue')
    }

    export function Success(msg: string, f: UnitTestSig) {
        report(f(msg), msg, "All tests passed.", 'green')
    }

    export function GenMsgGen(s: string, n: number): MsgGenSig {
        return () => `${s}, n#:${n++}`
    }

    export function GenAsserter(msgGen: MsgGenSig): AsserterSig {
        return b => assert(msgGen(), b)
    }

    export function GenErrorTester(msgGen: MsgGenSig): ErrorTesterSig {
        return f => assertFailure(msgGen(), f)
    }
}
