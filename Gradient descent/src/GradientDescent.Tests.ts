module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.err', testErr)
    }

    let testErr: UnitTesting.UnitTestSig = (assert, errorTest) => {
        let ts = [10, 20, 30]
        let ys = [1, 2, 3]
        let xss = [
            [1, 1],
            [2, 2],
            [3, 3]
        ]

        return [
            true
        ].every((test: boolean) => test)
    }
}