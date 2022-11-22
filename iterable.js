function createFiboIteratable(num) {
  let num1 = 0
  let nextNum = 0
  let num2 = 1
  let result
  let count = 0

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
          return { done: true }
        },
      }
    },
  }
}

const iter1 = createFiboIteratable(7)
console.log([...iter1])
