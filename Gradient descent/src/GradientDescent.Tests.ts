module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.DefHypothesis', testDefHypothesis)
        UnitTesting.Success('GradientDescent.DefError', testDefError)
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

    function testDefError(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(DefSquaredError(DefHypothesis([1]))([], 10) === 81),
            assert(DefSquaredError(DefHypothesis([2]))([], 33) === 961),
            assert(DefSquaredError(DefHypothesis([5]))([], -2) === 49),
            assert(DefSquaredError(DefHypothesis([19]))([], 7) === 144),

            assert(DefSquaredError(DefHypothesis([1, 1]))([1], 7) === 25),
            assert(DefSquaredError(DefHypothesis([5, -37]))([8], 8) === 89401),
            assert(DefSquaredError(DefHypothesis([8, 10]))([10], 5) === 10609),
            assert(DefSquaredError(DefHypothesis([-6, 10]))([9], 2) === 6724),

            assert(DefSquaredError(DefHypothesis([9, -1, -8]))([1, 3], 13) === 841),
            assert(DefSquaredError(DefHypothesis([9, -1, -8]))([6, -9], 37) === 1444),

            errorTest(() => { DefSquaredError(DefHypothesis([]))([], 0) }),
            errorTest(() => { DefSquaredError(DefHypothesis([]))([0], 0) }),
            errorTest(() => { DefSquaredError(DefHypothesis([0]))([0], 0) }),
            errorTest(() => { DefSquaredError(DefHypothesis([0]))([0, 0], 0) }),
        ].every(test => test)
    }

    function testDefCost(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(DefCost([
                [0, 0, 0],
                [1, 1, 0],
                [3, 7, 9]
            ], [0, 0, 0])([0, 0, 0, 0]) === 0),
            assert(DefCost([
                [1, 1],
            ], [3])([1, 1, 1]) === 0),
            assert(DefCost([
                [1, 3],
            ], [3])([1, 1, 2]) === 25),
            assert(DefCost([
                [1, 3],
                [6, -9],
            ], [13, 37])([9, -1, -8]) === 1142.5),
            assert(DefCost([
                [6, 8, 14],
                [42, -78, 9],
            ], [1, 52])([5, -8, 4, -7]) === 293332),

            errorTest(() => { DefCost([[]], [])([]) }),
            errorTest(() => { DefCost([], [0])([]) }),
            errorTest(() => { DefCost([[]], [0])([]) }),
            errorTest(() => { DefCost([[0]], [])([]) }),
            errorTest(() => { DefCost([[0]], [0])([]) }),
            errorTest(() => { DefCost([[0, 0]], [0])([0, 0]) }),
            errorTest(() => { DefCost([[0, 0], [0, 0],], [0])([0, 0]) }),
        ].every(test => test)
    }
}
