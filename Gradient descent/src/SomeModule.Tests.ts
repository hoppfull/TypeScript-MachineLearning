module SomeModule.Tests {
    export function RunAll() {
        UnitTesting.Success('SomeModule.SomeFunction', testSomeFunction)
    }

    let testSomeFunction: UnitTesting.UnitTestSig = (assert, errorTest) => [
        assert(SomeFunction(5) === 10),
        assert(SomeFunction(5) === 10),
        assert(SomeFunction(5) === 10),
        assert(SomeFunction(5) === 11),
        assert(SomeFunction(5) === 11),
        assert(SomeFunction(5) === 10),
        errorTest(() => { SomeFunction(0) }),
        errorTest(() => { SomeFunction(0) }),
        errorTest(() => { SomeFunction(0) }),
        errorTest(() => { SomeFunction(1) })
    ].every((test: boolean) => test)

}
