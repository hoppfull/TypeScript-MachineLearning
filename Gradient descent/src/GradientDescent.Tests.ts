module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.Evaluate', TestEvaluate)
    }

    function TestEvaluate(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(Evaluate([1, 1, 1], [1, 1, 1, 1]) === 4),
            assert(Evaluate([1, 2, 3], [1, 1, 1, 1]) === 7),
            assert(Evaluate([1, 2, 3], [10, 2, 3, 4]) === 30),
            assert(Evaluate([1, 2, 3], [-10, 2, 3, 4]) === 10),
            assert(Evaluate([1, -2, 3], [10, 2, 3, 4]) === 18),
            assert(Evaluate([], [1]) === 1),
            assert(Evaluate([], [8]) === 8),
            assert(Evaluate([], [13]) === 13),
            errorTest(() => { Evaluate([], []) }),
            errorTest(() => { Evaluate([1, 1, 1, 1], [1, 1]) }),
            errorTest(() => { Evaluate([1, 1, 1, 1], [1, 1, 1]) }),
            errorTest(() => { Evaluate([1, 1, 1, 1], [1, 1, 1, 1]) }),
        ].every(test => test)
    }
}
