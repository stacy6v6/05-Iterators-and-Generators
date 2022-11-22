function createFiboIteratable(num) {
  let num1 = 0
  let nextNum = 0
  let num2 = 1
  let result
  let count = 1

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (count !== num) {
            result = { value: nextNum, done: false }
            nextNum = num1 + num2
            num1 = num2
            num2 = nextNum
            count += 1
            return result
          }
          return { value: nextNum, done: true }
        },
      }
    },
  }
}

const iter1 = createFiboIteratable(4)
console.log([...iter1])
