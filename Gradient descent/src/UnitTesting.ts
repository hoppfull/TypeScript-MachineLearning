module UnitTesting {
    export let IgnoreErrorTesting = false

    type MsgGenSig = () => string
    type AsserterSig = (b: boolean) => boolean
    type ErrorTesterSig = (f: () => void) => boolean
    export type UnitTestSig = (assert: AsserterSig, errorTest: ErrorTesterSig) => boolean

    type assertSig = (msg: string, test: boolean) => boolean
    let assert: assertSig = (msg, test) => !report(!test, msg, "Test failed!", 'red')

    type genMsgGenSig = (s: string, n: number) => MsgGenSig
    let genMsgGen: genMsgGenSig = (s, n) => () => `${s}, n#:${n++}`

    type genAsserterSig = (msgGen: MsgGenSig) => AsserterSig
    let genAsserter: genAsserterSig = msgGen => b => assert(msgGen(), b)

    type genErrorTesterSig = (msgGen: MsgGenSig) => ErrorTesterSig
    let genErrorTester: genErrorTesterSig = msgGen => f => assertFailure(msgGen(), f)

    function report(b: boolean, msg1: string, msg2: string, color: string) {
        if (b) console.log(`%c${msg1} - ${msg2}`, `background:yellow;color:${color};`)
        return b
    }

    function assertFailure(msg: string, f: () => void) {
        if (IgnoreErrorTesting) return true
        try { f() } catch (e) { return true }
        return !report(true, msg, "Test should have thrown error!", 'blue')
    }

    export function Success(msg: string, f: UnitTestSig) {
        let msgGen = genMsgGen(msg, 1)
        report(f(genAsserter(msgGen), genErrorTester(msgGen)), msg, "All tests passed.", 'green')
    }

}