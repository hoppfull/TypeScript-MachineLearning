module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.DefHypothesis', testDefHypothesis)
    }
    
    function testDefHypothesis(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(DefHypothesis([1, 1, 1, 1])([1, 1, 1]) === 4),
            assert(DefHypothesis([1, 1, 1, 1])([1, 2, 3]) === 7),
            assert(DefHypothesis([10, 2, 3, 4])([1, 2, 3]) === 30),
            assert(DefHypothesis([-10, 2, 3, 4])([1, 2, 3]) === 10),
            assert(DefHypothesis([10, 2, 3, 4])([1, -2, 3]) === 18),
            assert(DefHypothesis([1])([]) === 1),
            assert(DefHypothesis([8])([]) === 8),
            assert(DefHypothesis([13])([]) === 13),
            errorTest(() => { DefHypothesis([])([]) }),
            errorTest(() => { DefHypothesis([1, 1])([1, 1, 1, 1]) }),
            errorTest(() => { DefHypothesis([1, 1, 1])([1, 1, 1, 1]) }),
            errorTest(() => { DefHypothesis([1, 1, 1, 1])([1, 1, 1, 1]) }),
        ].every(test => test)
    }
}
