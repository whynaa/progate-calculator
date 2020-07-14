//Declaration
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//Screen Output
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//Key Input
const numbers = document.querySelectorAll(".number")
const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value)
    })
})

//Calculation
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () =>{
    calculate ()
    updateScreen(currentNumber)
})

//Clear
const claerAll =() => {
    prevNumber = ''
    calculationOperator =''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () =>{
    claerAll()
    updateScreen(currentNumber)
})

//Decimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})