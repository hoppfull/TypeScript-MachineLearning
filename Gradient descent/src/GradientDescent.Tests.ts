module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.cost', testCost)
        UnitTesting.Success('GradientDescent.costPrim', testCostPrim)
        UnitTesting.Success('GradientDescent.avgCost', testAvgCost)
    }

    let testCost: UnitTesting.UnitTestSig = (assert, errorTest) => {
        return [
            assert(cost([1, 1, 1, 1], [1, 1, 1, 1], 0) === 8),
            assert(cost([1, 1, 2, 3], [1, 1, 1, 1], 0) === 24.5),
            assert(cost([1, 1, 2, 3], [1, 2, 3, 4], 0) === 220.5),
            assert(cost([1, 1, 1, 1], [1, 1, 1, 1], 1) === 4.5),
            assert(cost([1, 1, 2, 3], [1, 1, 1, 1], 7) === 0),
            assert(cost([1, 1, 2, 3], [1, 2, 3, 4], -5) === 338)
        ].every(test => test)
    }

    let testCostPrim: UnitTesting.UnitTestSig = (assert, errorTest) => {
        return [
            assert(costPrim([1, 1], [1, 1], 0)[0] === 2),
            assert(costPrim([1, 1], [1, 1], 3)[0] === -1),
            assert(costPrim([1, 7], [3, 2], 3)[0] === 14),
            assert(costPrim([1, 7], [3, 2], 3)[1] === 98),
            assert(costPrim([1, 6, 2], [1, 5, 2], -6)[0] === 41),
            assert(costPrim([1, 6, 2], [1, 5, 2], -6)[1] === 246),
            assert(costPrim([1, 6, 2], [1, 5, 2], -6)[2] === 82)
        ].every(test => test)
    }

    let testAvgCost: UnitTesting.UnitTestSig = (assert, errorTest) => {
        return [
            assert(avgCost([
                [1, 1] // (2 - 0) ** 2 / 2 = 2
            ], [1, 1], [0]) === 2), // (2) / 1 = 2
            assert(avgCost([
                [1, 1] // (2 - 2) ** 2 / 2 = 0
            ], [1, 1], [2]) === 0), // (0) / 1 = 0
            assert(avgCost([
                [1, 1] // (2 - 4) ** 2 / 2 = 2
            ], [1, 1], [4]) === 2), // (2) / 1 = 2
            assert(avgCost([
                [1, 1],// (2 - 0) ** 2 / 2 = 2
                [1, 1] // (2 - 2) ** 2 / 2 = 0
            ], [1, 1], [0, 2]) === 1), // (2 + 0) / 1
            assert(avgCost([
                [1, 1],// (2 - 0) ** 2 / 2 = 2
                [1, 1],// (2 - 2) ** 2 / 2 = 0
                [1, 1] // (2 - 4) ** 2 / 2 = 2
            ], [1, 1], [0, 2, 4]) === 4 / 3) // (2 + 2 + 0) / 3 = 4/3
        ].every(test => test)
    }
}
