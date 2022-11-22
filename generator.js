function createFiboGenerator(num) {
  let num1 = 0
  let nextNum = 0
  let num2 = 1
  let count = 0

  return function* generatorFiboFunction() {
    while (count !== num) {
      yield nextNum
      nextNum = num1 + num2
      num1 = num2
      num2 = nextNum
      count += 1
    }
    return nextNum
  }
}

const genFiboFunc1 = createFiboGenerator(4)
const genFiboFuncObj1 = genFiboFunc1()
console.log([...genFiboFuncObj1])

const genFiboFunc2 = createFiboGenerator(4)
const genFiboFuncObj2 = genFiboFunc2()
for (let i = 0; i < 4; i += 1) {
  console.log(genFiboFuncObj2.next())
}
