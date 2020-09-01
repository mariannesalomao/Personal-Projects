const template = require('./template.html')

const getInputBinary = () => {
    let inputBinary = document.getElementsByName("binary")

    const bin2Dec = (inputBinary) => {
        let decimal = 0

        for (let index = inputBinary.length; index >= 0; index--) {
            decimal += parseInt(inputBinary[index]) * Math.pow(2, inputBinary.length-1-index)
        }
        return decimal
    }
}