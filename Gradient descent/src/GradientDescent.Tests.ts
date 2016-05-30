module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.DefHypothesis', testDefHypothesis)
        UnitTesting.Success('GradientDescent.DefError', testDefError)
        UnitTesting.Success('GradientDescent.DefCost', testDefCost)
        UnitTesting.Success('GradientDescent.DefCostDerivative', testDefCostDerivative)
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
            assert(DefError(DefHypothesis([1]))([], 10) === -9),
            assert(DefError(DefHypothesis([2]))([], 33) === -31),
            assert(DefError(DefHypothesis([5]))([], -2) === 7),
            assert(DefError(DefHypothesis([19]))([], 7) === 12),

            assert(DefError(DefHypothesis([1, 1]))([1], 7) === -5),
            assert(DefError(DefHypothesis([5, -37]))([8], 8) === -299),
            assert(DefError(DefHypothesis([8, 10]))([10], 5) === 103),
            assert(DefError(DefHypothesis([-6, 10]))([9], 2) === 82),

            // 5 - 296 - 8

            assert(DefError(DefHypothesis([9, -1, -8]))([1, 3], 13) === -29),
            assert(DefError(DefHypothesis([9, -1, -8]))([6, -9], 37) === 38),

            errorTest(() => { DefError(DefHypothesis([]))([], 0) }),
            errorTest(() => { DefError(DefHypothesis([]))([0], 0) }),
            errorTest(() => { DefError(DefHypothesis([0]))([0], 0) }),
            errorTest(() => { DefError(DefHypothesis([0]))([0, 0], 0) }),
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
            ], [3])([1, 1, 2]) === 12.5),
            assert(DefCost([
                [1, 3],
                [6, -9],
            ], [13, 37])([9, -1, -8]) === 571.25),
            assert(DefCost([
                [6, 8, 14],
                [42, -78, 9],
            ], [1, 52])([5, -8, 4, -7]) === 146666),

            errorTest(() => { DefCost([[]], [])([]) }),
            errorTest(() => { DefCost([], [0])([]) }),
            errorTest(() => { DefCost([[]], [0])([]) }),
            errorTest(() => { DefCost([[0]], [])([]) }),
            errorTest(() => { DefCost([[0]], [0])([]) }),
            errorTest(() => { DefCost([[0, 0]], [0])([0, 0]) }),
            errorTest(() => { DefCost([[0, 0], [0, 0],], [0])([0, 0]) })
        ].every(test => test)
    }

    function testDefCostDerivative(msg: string) {
        let msgGen = UnitTesting.GenMsgGen(msg, 1)
        let assert = UnitTesting.GenAsserter(msgGen)
        let errorTest = UnitTesting.GenErrorTester(msgGen)
        return [
            assert(DefCostDerivative([
                [0]
            ], [0])([0, 0], 0) === 0),
            assert(DefCostDerivative([
                [7]
            ], [5])([3, 4], 0) === 26),
            assert(DefCostDerivative([
                [7]
            ], [5])([3, 4], 1) === 182),
            assert(DefCostDerivative([
                [5, 13]
            ], [-1])([-2, 18, 8], 0) === 193),
            assert(DefCostDerivative([
                [5, 13]
            ], [-1])([-2, 18, 8], 1) === 965),
            assert(DefCostDerivative([
                [5, 13]
            ], [-1])([-2, 18, 8], 2) === 2509),
            assert(DefCostDerivative([
                [1, 2],
                [3, 4]
            ], [5, 6])([7, 8, 9], 0) === 44.5),
            assert(DefCostDerivative([
                [1, 2],
                [3, 4]
            ], [5, 6])([7, 8, 9], 1) === 105.5),
            assert(DefCostDerivative([
                [1, 2],
                [3, 4]
            ], [5, 6])([7, 8, 9], 2) === 150),

            errorTest(() => { DefCostDerivative([], [])([], 0) }),
            errorTest(() => { DefCostDerivative([[0]], [0])([0, 0], -1) }),
            errorTest(() => { DefCostDerivative([[]], [0])([0], 1) }),
            errorTest(() => { DefCostDerivative([[0]], [0])([0, 0], 2) }),
            errorTest(() => { DefCostDerivative([[]], [])([], 0) }),
            errorTest(() => { DefCostDerivative([], [0])([], 0) }),
            errorTest(() => { DefCostDerivative([[]], [0])([], 0) }),
            errorTest(() => { DefCostDerivative([[0]], [])([], 0) }),
            errorTest(() => { DefCostDerivative([[0]], [0])([], 0) }),
            errorTest(() => { DefCostDerivative([[0, 0]], [0])([0, 0], 0) }),
            errorTest(() => { DefCostDerivative([[0, 0], [0, 0],], [0])([0, 0], 0) })
        ].every(test => test)
    }
}
