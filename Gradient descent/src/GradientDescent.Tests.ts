module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.cost', testCost)
        UnitTesting.Success('GradientDescent.costPrim', testCostPrim)
        UnitTesting.Success('GradientDescent.avgCost', testAvgCost)
        UnitTesting.Success('GradientDescent.avgCostPrim', testAvgCostPrim)
        UnitTesting.Success('GradientDescent.featureAvgAndStd', testfeatureAvgAndStd)
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

    let testAvgCostPrim: UnitTesting.UnitTestSig = (assert, errorTest) => {
        return [
            assert(avgCostPrim([
                [1, 1] // (2 - 0) * 1 = 2
            ], [1, 1], [0])[0] === 2), // 2 / 1
            assert(avgCostPrim([
                [1, 1] // (2 - 0) * 1 = 2
            ], [1, 1], [0])[1] === 2), // 2 / 1
            assert(avgCostPrim([
                [1, 3] // (7 + 12 - 3) * 1 = 16
            ], [7, 4], [3])[0] === 16), // 16 / 1
            assert(avgCostPrim([
                [1, 3] // (7 + 12 - 3) * 3 = 48
            ], [7, 4], [3])[1] === 48), // 48 / 1
            assert(avgCostPrim([
                [1, 4, 9] // (2 - 20 + 18 + 5) * 1 = 5
            ], [2, -5, 2], [-5])[0] === 5), // 5 / 1
            assert(avgCostPrim([
                [1, 4, 9] // (2 - 20 + 18 + 5) * 4 = 20
            ], [2, -5, 2], [-5])[1] === 20), // 20 / 1
            assert(avgCostPrim([
                [1, 4, 9] // (2 - 20 + 18 + 5) * 9 = 45
            ], [2, -5, 2], [-5])[2] === 45), // 48 / 1
            assert(avgCostPrim([
                [1, 1], // (1 + 1 - 0) * 1 = 2
                [1, 1] // (1 + 1 - 0) * 1 = 2
            ], [1, 1], [0, 0])[0] === 2), // 4 / 2 = 2
            assert(avgCostPrim([
                [1, 1], // (1 + 1 - 0) * 1 = 2
                [1, 1] // (1 + 1 - 0) * 1 = 2
            ], [1, 1], [0, 0])[1] === 2), // 4 / 2 = 2
            assert(avgCostPrim([
                [1, 7], // (8 + 35 - 3) * 1 = 40
                [1, 3] // (8 + 15 + 1) * 1 = 24
            ], [8, 5], [3, -1])[0] === 32), // 64 / 2 = 32
            assert(avgCostPrim([
                [1, 7], // (8 + 35 - 3) * 7 = 280
                [1, 3] // (8 + 15 + 1) * 3 = 72
            ], [8, 5], [3, -1])[1] === 176) // 352 / 2 = 176
        ].every(test => test)
    }

    let testfeatureAvgAndStd: UnitTesting.UnitTestSig = (assert, errorTest) => {
        return [
            (() => {
                let {mu, sigma} = featureAvgAndStd([
                    [2], [4], [4], [4], [5], [5], [7], [9]
                ])
                return mu[0] === 5 && sigma[0] === 2
            })(),
            (() => {
                let {mu, sigma} = featureAvgAndStd([
                    [1, 1]
                ])
                return mu[0] === 1, mu[1] === 1 && sigma[0] === 0 && sigma[1] === 0
            })(),
            (() => {
                let {mu, sigma} = featureAvgAndStd([
                    [1, 1],
                    [2, 1],
                    [3, 1],
                ])
                return mu[0] === 2, mu[1] === 1 && sigma[0] === Math.sqrt(2 / 3) && sigma[1] === 0
            })()
        ].every(test => test)
    }
}
