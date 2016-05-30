module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.Hypothesis', testHypothesis)
    }
    
    function testHypothesis(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(Hypothesis([1, 1, 1, 1])([1, 1, 1]) === 4),
            assert(Hypothesis([1, 1, 1, 1])([1, 2, 3]) === 7),
            assert(Hypothesis([10, 2, 3, 4])([1, 2, 3]) === 30),
            assert(Hypothesis([-10, 2, 3, 4])([1, 2, 3]) === 10),
            assert(Hypothesis([10, 2, 3, 4])([1, -2, 3]) === 18),
            assert(Hypothesis([1])([]) === 1),
            assert(Hypothesis([8])([]) === 8),
            assert(Hypothesis([13])([]) === 13),
            errorTest(() => { Hypothesis([])([]) }),
            errorTest(() => { Hypothesis([1, 1])([1, 1, 1, 1]) }),
            errorTest(() => { Hypothesis([1, 1, 1])([1, 1, 1, 1]) }),
            errorTest(() => { Hypothesis([1, 1, 1, 1])([1, 1, 1, 1]) }),
        ].every(test => test)
    }
}
