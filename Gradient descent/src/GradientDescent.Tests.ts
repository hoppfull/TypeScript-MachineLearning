module GradientDescent.Tests {
    export function RunAll() {
        UnitTesting.Success('GradientDescent.err', testErr)
    }
    
    let testErr: UnitTesting.UnitTestSig = (assert, errorTest) => [
        true
    ].every((test: boolean) => test)
}