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
        console.log(ts.slice(1).reduce((a, t, j) => a + t * xss[0][j], ts[0] - ys[0]))

        //console.log(err(xss, ys, ts))


        return [
            assert(err([
                [1, 1],
                [2, 2],
                [3, 3]
            ],
                [1, 2, 3],
                [10, 20, 30])[0] === 59)
        ].every((test: boolean) => test)
    }
}