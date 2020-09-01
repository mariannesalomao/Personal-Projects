/* // Função pra verificar se a entrada é array ou não
const isArray = (arr) => {
    if (!Array.isArray(arr)) {
        return false
    }
    return true
}
console.log(isArray([1, 3, 6])) // true
console.log(isArray('String')) // false */

/*------------------------------------------------------------------------------------------------------------------------*/

/* // Função pra verificar se a entrada é array ou não
const isArray = (input) => {
    if (toString.call(input) === '[Object Array]') {
    return true
    }
    return false
}
console.log(isArray('marianne'))
console.log(isArray(['2', '8', '9'])) // * Nessa função ele retorna false para arrays de string */

/*------------------------------------------------------------------------------------------------------------------------*/

/* // Função para clonar um array
const arrayClone = (clone) => {
    return clone.slice(0)
}
const a1 = [{
    v1: 'carro',
    v2: 'moto',
    v3: 'bicicleta',
    total: 4567.98
}]
const a = arrayClone(a1)
console.log(a) */

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para pegar o primeiro elemento do array
// const firstElement = (array, n) => {
//     if (array == null) {
//         return void 0
//     }
//     else if (n == null) {
//         return array[0]
//     }
//     else if (n < 0) {
//         return []
//     } else {
//         return array.slice(0, n)
//     }
// };
// // console.log(firstElement([7, 9, 5, 3]));
// console.log(firstElement([7, 9, 0, -2],6)); Retorna o array [7, 9, 0, -2]
// console.log(firstElement([7, 9, 0, -2],-3));

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para pegar o último elemento do array
// const lastElement = (array, n) => {
//     if (array == null) {
//         return void 0
//     } else if (n == null) {
//         return array[array.length - 1]
//     } else {
//         return array.slice(Math.max(array.length - n, 0))
//     }
// }
// console.log(lastElement([23, 78, 9, 65, 78]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para pegar elementos do array e colocá-los como string
// let a = ['Australia', 'Canada', 'United States', 'Colombia']
// const b = a.toString()
// const c = a.join()
// const d = a.join(', ')
// console.log(d)

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para colocar (dash -) a cada dois números
// let num = 254684565676
// let str = num.toString()
// let result = [str[0]]
//
// for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
//         result.push('-', str[i])
//     } else {
//         result.push(str[i])
//     }
// }
// console.log(result.join(''))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para ordenar elementos de arrays em ordem crescente
// let a = [7, 8, 4, 23, -9, -7, -32, 65, 43] Para fazer isso sem criar uma função
// console.log(a.sort())

/*------------------------------------------------------------------------------------------------------------------------*/

// Programa pra encontrar elemento mais frequente do array
// const a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// const getMostFrequentElement = (array, map) => {
//     array.forEach(x => map.set(x, (x, ((map.has(x)) ? (map.get(x) + 1) : 1))))
//     return Array.from(new Map([...map.entries()].sort()))[map.size - 1][0]
// }
// let map = new Map()
// let result = getMostFrequentElement(a, map)
// console.log(`=> ${result} ( ${map.get(result)} vezes )`)

/*------------------------------------------------------------------------------------------------------------------------*/

// Programa pra swap the case de cada caractere da string
// let str = 'Alo Brasil'
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVXZ'
// const lower = 'abcdefghijklmnopqrstuvxz'
// const result = []
// for (let i; i < str.length; i++) {
//     if (UPPER.includes(str[i])) {
//         result.push(str[i].toLowerCase())
//     } else if (lower.includes(str[i])) {
//         result.push(str[i].toUpperCase())
//     } else {
//         result.push(str[i])
//     }
// }
// console.log(result.join(''))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para encontrar a soma dos quadrado dos elementos de um array
// const sumSquare = (array) => {
//     let sum = 0
//     i = array.length
//     while (i--) {
//         sum += Math.pow(array[i], 2)
//     }
//     return sum
// }
// console.log(sumSquare([49, 81]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para encontrar a soma e o produto de um array
// const a = [1, 2, 3, 4, 5]
// let s = 0
// let p = 1
// for (let i = 0; i < a.length; i += 1) {
//     s += a[i]
//     p *= a[i]
// }
// console.log(`Soma: ${s} Produto: ${p}`)

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para remover elementos duplicados num array
// const removeDuplicates = (num) => {
//     let i
//     const len = num.length
//     const out = []
//     const obj = {}
//
//     for (i = 0; i < len; i++) {
//         obj[num[i]] = 0
//     }
//     for (i in obj) {
//         out.push(i)
//     }
//     return out
// }
// const myArray = [1, 1, 2, 3, 45, 3, 5, 5, 2]
// result = removeDuplicates(myArray)
// console.log(result)

/*------------------------------------------------------------------------------------------------------------------------*/

// let color = ['Blue', 'Green', 'Red', 'Orange']
// const ordem = (n) => {
//   let o = ['th', 'st', 'nd', 'rd']
//     i = n % 100
//     return i + (o[(i - 20) % 10] || o[i] || o[0])
// }
// for (n = 0; n < color.length; n++) {
//     let ordinal = n + 1
//     let output = (ordem(ordinal) + ' choice is ' + color[n] + '.')
//     console.log(output)
// }

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para remover 0, NaN, false, undefined e null de um array
// const removeFalseArray = (array) => {
//   return array.filter(Boolean)
// }
// let testArray = [NaN, 0, 23, 54, undefined, -44, null, false]
// result = removeFalseArray(testArray)
// console.log(result)

/*------------------------------------------------------------------------------------------------------------------------*/

// função para remover elementos específicos do array
// const removeElement = (array, n) => {
//   const index = array.indexOf(n)
//     if (index > - 1) {
//         array.splice(index, 1)
//     }
//     return array
// }
// let a = [2, 5, 78, 67, 90, 7]
// result = removeElement(a, 78)
// console.log(result)

/*------------------------------------------------------------------------------------------------------------------------*/
// Função para retornar só elementos maiores que...
// function BiggerElements(val) {
//     return function (evalue) {
//         return (evalue >= val);
//     };
// }
// let result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));
// console.log(result);

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para verificar se um número é positivo ou negativo
// const positiveNegative = (x, y) => {
//   if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
//         return true
//     } else {
//       return false
//   }
// }
// console.log(positiveNegative(2, -2))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para pegar o maior número de três elementos de um array
// function greaterThenAll (num1, num2, num3) {
//     let array = [num1, num2, num3]
//     result = array.sort(function (a,b){return a-b})
//     console.log(res[array.length-1])
// }
// greaterThenAll(300,40,-20)

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para adcionar elementos em um array usando spread operator
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// arr1.push(...arr2);
// console.log(arr1)

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para pra fazer replace de elemento do array por outro elemento
// const replaceArray = (array, oldValue, newValue) => {
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] === oldValue) {
//           array[i] = newValue
//       }
//   }
//   return array
// }
// a = [2, 5, 7, 4, 3, 9, 9, 9, 9, 0, 4, 3]
// console.log(replaceArray(a, 9, 81))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para calcular ( n + n/2 + n/4 + n/8 )
// const nOperator = (number) => {
//     if (number > 0) {
//         number = (number + number / 2 + number / 4 + number / 8)
//     } else {
//         console.log(`${number} is not a integer`)
//     }
// }
// console.log(nOperator(0))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para reverter um número. Passe o número para string, depois separe os números com split, depois reverta eles e junte de novo c/ join
// const reverseNumber = (num) => {
//     return num.toString().split('').reverse().join('')
// }
// console.log(reverseNumber(678673))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para reverter a ordem dos elementos de um array
// const reverseArray = (array) => {
//   return array.toString().split('').reverse().join('')
// }
// console.log(reverseArray([2, 7, 3, 8, 4]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para checar se a string é a mesma de forma inversa
// const stringInversa = (str) => {
// Primeiro passar a string pra lower case e tirar os caracteres alfanuméricos
//   let lowerStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')
//   // Checar se a string está vazia
//   if (lowerStr === '') {
//       console.log('Nada Encontrado')
//       return false
//   }
//   // Checar se o tamanho da string é par ou ímpar
//   let ccount = 0
//   if ((lowerStr.length) % 2 === 0) {
//       ccount = (lowerStr.length) / 2
//   } else {
//       // Se o tamanho da string é um, ela é reversa
//       if (lowerStr.length === 1) {
//           console.log('A STRING é reversa')
//           return true
//       } else {
//           // Se o tamanho é ímpar, ignore o caractere do meio
//           ccount = (lowerStr.length - 1) / 2
//       }
//   }
// E agora loop para checar o primeiro caractere e o último caractere e partir pra próxima
//     for (let i = 0; i < ccount; i++) {
//         // Compare caracteres
//         if (lowerStr[i] != lowerStr.slice(-1 - i)[0]) {
//             console.log('A STRING NÃO é reversa')
//             return false
//         }
//     }
//     console.log('A STRING é reversa sim')
//     return true
// }
// console.log(stringInversa(' madam'))
// console.log(stringInversa('nurses run'))

/*------------------------------------------------------------------------------------------------------------------------*/

// function isPalindrome(str) {
//
//     let initialString = str.split(' ').reduce((a, b) => {
//         return (a + b);
//     }).toLowerCase();
//
//     let reversedString = initialString.split('').reverse().join('');
//     return (reversedString === initialString) ? true : false
//
// }
// console.log(isPalindrome('madam'))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para retornar uma string em ordem alfabética
// const stringAlphabetical = (str) => {
//   return str.split('').sort().join('')
// }
// console.log(stringAlphabetical('marianne'))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para encontrar maior palavra de uma frase. split separa os elementos
// const maxLength = (str) => {
//     let ar = str.split(' ');
//     let temp = [];
//     ar.forEach(item => {
//         temp.push(item.length);
//     })
//     let comp = temp.indexOf(Math.max(...temp));
//     return ar[comp];
// }
// let data = 'Marianne linda demais';
// console.log(maxLength(data));

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para contar vogais numa string
// const countVogals = str => [...str].filter(element => [...'aeiouAEIOU'].includes(element)).length
// console.log(countVogals('Marianne Oliveira'))

/*------------------------------------------------------------------------------------------------------------------------*/

// Verificar se um número é primo ou não
// const isPrime = n => Number.isInteger(n)?
//     n > 1 ?
//         [...Array(n + 1).keys()].filter(el => n % el == 0).length === 2 ?
//             'prime' : 'composite' : 'neither prime nor composite' : 'not integer';
// console.log(isPrime(8))

/*------------------------------------------------------------------------------------------------------------------------*/
// const findSecond = (arr) =>{
//     arr.sort((a,b)=>a-b)
//     return [arr[1],arr[arr.length-2]];
// }
// console.log(findSecond([1, 2, 3, 4, 5, 6]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para encontrar fatores dos números
// const factors = (n) => {
//     let numFactors = [], i
//     for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
//         if (n % i === 0) {
//             numFactors.push(i)
//             if (n / i !== i)
//                 numFactors.push(n / i)
//         }
//     numFactors.sort(function (x, y) {
//         return x - y
//     })
//     return numFactors
// }
// console.log(factors(15))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para calcular fatorial
// const factorial = (number) => {
//     if (number === 0) {
//         return 1
//     }
//     return number * factorial(number - 1)
// }
// console.log(factorial(9))

/*------------------------------------------------------------------------------------------------------------------------*/

// Passar pra radianos
// const toRadians = (degrees) => {
//     let pi = Math.PI
//     return degrees * (pi/180)
// }
// console.log(toRadians(45))

/*------------------------------------------------------------------------------------------------------------------------*/

// Passar pra graus
// const toDegrees = (radians) => {
//     let rad = Math.PI
//     return radians * (180/rad)
// }
// console.log(toDegrees(0.7853981633974483))

/*------------------------------------------------------------------------------------------------------------------------*/

// Calcular números primos
// const primeFactors = (numbers) => {
//     let store = []
//     let i, j
//     let primes = []
//     for (i = 2; i <= numbers; i++) {
//         if (!store[i]) {
//             primes.push(i)
//             for (j = i << 1; j <= numbers; j += 1) {
//                 store[j] = true
//             }
//         }
//     }
//     return primes
// }
// console.log(primeFactors(5))

/*------------------------------------------------------------------------------------------------------------------------*/

// Subtrair elementos um dos outros num array
// const subtractArray = (ar) => {
//     let result = ar[0]
//     for (let i = 1; i < ar.length; i++)
//          result -= ar[i]
//     return result
// }
// console.log(subtractArray([6, 7, 9, 14, 78, -91]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Somar elementos um dos outros num array
// const plusArray = (ar) => {
//     let result = ar[0]
//     for (let i = 1; i < ar.length; i++)
//         result += ar[i]
//     return result
// }
// console.log(plusArray([6, 7, 9, 14]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para verificar se é array ou não
// const isArray = (input) => {
//   if (toString.call(input) === '[object Array]')
//       return true
//     return false
// }
// console.log(isArray([2, 4, 5, 7]))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para verificar se é string ou não
// const isString = (input) => {
//     if (Object.prototype.toString.call(input) === '[object String]')
//         return true
//     else
//         return false
// }
// console.log(isString('Marianne'))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para verificar se a string está vazia
// const isBlank = (input) => {
//     if (input.length === 0)
//         console.log('A String está vazia')
//     else
//         return true
// }
// console.log(isBlank(''))

/*------------------------------------------------------------------------------------------------------------------------*/

// Método para transformar uma string em um array
// const stringToArray = (str) => {
//   return str.trim().split(' ')
// }
// console.log(stringToArray('Marianne Salomao de Oliveira'))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para determinar se o primeiro caractere da string é Uppercase
// const isUpperCase = (str) => {
//     regexStr = /^[A-Z]/
//     if (regexStr.test(str)) {
//         console.log('O primeiro caractere dessa string é UPPERCASE')
//     } else {
//         console.log('O primeiro caractere dessa string NÃO é UPPERCASE')
//     }
// }
// console.log(isUpperCase('marianne'))

/*------------------------------------------------------------------------------------------------------------------------*/

// Função para tirar as aspas de uma string
// const aspas = (str) => {
//   let result
//     if (typeof str === 'string') {
//         result = str.replace(/^\s+|\s+$/g, '')
//         return result
//     } else {
//         return false
//     }
// }
// console.log(aspas('The first time'))

/*------------------------------------------------------------------------------------------------------------------------*/

