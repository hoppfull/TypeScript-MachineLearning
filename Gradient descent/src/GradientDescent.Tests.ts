module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.DefHypothesis', testDefHypothesis)
        UnitTesting.Success('GradientDescent.DefCost', testDefCost)
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

            errorTest(() => { DefHypothesis([]) }),
            errorTest(() => { DefHypothesis([])([]) }),
            errorTest(() => { DefHypothesis([1, 1])([1, 1, 1, 1]) }),
            errorTest(() => { DefHypothesis([1, 1, 1])([1, 1, 1, 1]) }),
            errorTest(() => { DefHypothesis([1, 1, 1, 1])([1, 1, 1, 1]) }),
        ].every(test => test)
    }

    function testDefCost(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(DefCost(DefHypothesis([1]))([], 10) === -9),
            assert(DefCost(DefHypothesis([2]))([], 33) === -31),
            assert(DefCost(DefHypothesis([5]))([], -2) === 7),
            assert(DefCost(DefHypothesis([19]))([], 7) === 12),

            assert(DefCost(DefHypothesis([1, 1]))([1], 7) === -5),
            assert(DefCost(DefHypothesis([5, -37]))([8], 8) === -299),
            assert(DefCost(DefHypothesis([8, 10]))([10], 5) === 103),
            assert(DefCost(DefHypothesis([-6, 10]))([9], 2) === 82),
        ].every(test => test)
    }
}
