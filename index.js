// const arr = [1, 2, 3, 4, 5]

//cifrele pare:
// const arr1 = arr.filter((item, index, arr) => {
//     return item % 2 === 0;
// })

// console.log(arr1)



//ex.1 sa ramana doar cifrele m mari ca 2:
// const arr1 = arr.filter((item) => {
//     return item > 2 ;
// })

// console.log(arr1)



//ex.2 sa ramana cifrele impare:
// const arr1 = arr.filter((item) => {
//     return item % 2 !== 0;
// })

// console.log(arr1)


//ex.3 elementele a caror pozitie in lista este para:
// const arr1 = arr.filter((item, index) => {
//     return index % 2 === 0 && index !== 0;
// })

// console.log(arr1)


//impar:
// const arr1 = arr.filter((item, index) => {
//     return index % 2 > 0;
// })

// console.log(arr1)

// const arr = [1, 2, 3, 4, 5]
// const arr1 = [1,2,3,4]

// console.log([...arr, ...arr1])

// console.log(arr.map(item => item +1))

// console.log('1',arr.length)

// const result = arr.push(9)

// console.log('2', arr.length)

// console.log(arr)

// console.log(pushResult)


// const testFunc = (num) => {
//     console.log(num)
//     return num;
// }

// const result = testFunc(5)

// console.log('result', result)


// const arr = [1, 2, 3, 4, 5, 'str']

// const lastElement = arr.pop()

// console.log(arr)
// console.log(lastElement)


// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = []

// arr1.forEach((item, index, arr) => {
//     console.log(item, index)
// })

// arr1.forEach((item, index, arr) => {
//     if(index > 2) arr2.push(item)
// })

// console.log(arr2)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const func = (list, num) => {
//     if(num >= list.length) return list;
//     const result = [...list]

//     for(let i = 1; i <= num; i++){
//         result.pop()
//     }

//     return result;
// }

// console.log(func(arr, 5))
// console.log(arr)



// const restFunc = (arg1, arg2, arg3, ...rest) => {
//     console.log(rest)
// }

// restFunc(1, 2, 3, 4, 5, 6, 7, 8)


// const obj = {
//     name: 'alex',
//     age: 32,
//     location:{
//         city : 'Chisinau'
//     }
// }


// const name = obj.name
// const age = obj.age
// const location = obj.location

//ori

// const {name, age, location} = {...obj}

// console.log(name)
// console.log(age)
// console.log(location.city)

// const departamentulBuiucaniUtilizatorul5 = {
//     name: 'alex',
//     age: 32,
//     location:{
//         city : 'Chisinau'
//     }
// }

//     const {age, location } = {...departamentulBuiucaniUtilizatorul5}
//     const {name} = {...departamentulBuiucaniUtilizatorul5}

// const arr = [1, 2, 3, 4, 5, 6]

// const [first, second] = [...arr]
// console.log(first, second)

// const [third,, first] = [...arr]
// const [primul,, alTreilea] = [...arr]


// console.log('first', first)
// console.log('third', third)
// console.log(primul, alTreilea)


// const arr = [1, 2, 3, 4, ,5]

// const result = arr.some((item, index, arr) => {
//    console.log(item)
//     return item === 2
// })

// console.log(result)


// const arr = [1,'22', 2, 3, 4, ,5]

// const result = arr.every((item, index, arr) => {
//     console.log(item)
//      return typeof item === 'number'
//  })

//  console.log(result)