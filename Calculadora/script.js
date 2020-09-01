(function () {
  "use strict"

  // atalho para pegar os elementos
  let el = function (element) {
    if (element.charAt(0) === '#') { // Se passado um id
      return document.querySelector(element) // retorna um único elemento
    }
    return document.querySelectorAll(element) // se não for, retorna uma nodelist
  }

  // variáveis
  let viewer = el('#viewer') // tela onde o resultado é plotado
  let equals = el('#equals') // botão igual
  let nums = el('.num') // lista dos números
  let ops = el('.ops') // lista de operadores
  let theNum = '' // número atual
  let oldNum = '' // Primeiro número
  let resultNum // resultado
  let operator

  // Quando o número é clicado, pegue o número atual selecionado
  const setNum = function() {
    if (resultNum) { // Se o resultado tá na tela, reset o número
      theNum = this.getAttribute('data-num') // O método é usado para obter o valor atual de um atributo do elemento
      resultNum = ''
    } else { // se não, adicionar dígito ao número anterior (isso é uma string!)
      theNum += this.getAttribute('data-num')
    }

    viewer.innerHTML = theNum // mostra o número atual
  }

  // Quando o operator é clicado. Passe um número para o oldNum e salve o operador
  const moveNum = function() {
    oldNum = theNum
    theNum = ''
    operator = this.getAttribute('data-ops')

    equals.setAttribute('data-result', '') // limpa resultado in attr
    // O método é usado para definir um atributo no elemento especificado
  }

  // quando equals é clicado. Resultado calculado
  const displayNum = function() {
    // Convertendo uma entrada string para números
    oldNum = parseFloat(oldNum)
    theNum = parseFloat(theNum)

    // Executar operação
    switch (operator) {
      case 'plus':
        resultNum = oldNum + theNum
        break;

      case 'minus':
        resultNum = oldNum - theNum
        break;

      case 'times':
        resultNum = oldNum * theNum
        break;

      case 'divided by':
        resultNum = oldNum / theNum
        break;

        // Se o igual é pressionado sem um operador, mantenha o numero e continue
      default:
        resultNum = theNum
    }

    // Se NaN ou Infinity for retornado
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        // Se o resultado não é um número
        resultNum = 'Quebra, vc quebrou aqui'
      } else {
        // Se o resultado é infinity, set off by dividing by zero
        resultNum = 'Look what you\'ve done'
        el('#calculator').classList.add('broken') // break calculadora
        el('#reset').classList.add('show') // Mostra o botão de reset
      }
    }

    // Display resultado, finalmente!!
    viewer.innerHTML = resultNum
    equals.setAttribute('data-result', resultNum)

    // Agora reset odlNum e mantenha o resultado
    oldNum = 0
    theNum = resultNum
  }

  // quando clear button é pressionado. Limpa tudo
  const clearAll = function() {
    oldNum = ''
    theNum = ''
    viewer.innerHTML = '0'
    equals.setAttribute('data-result', resultNum)
  }

  // Adicionar eventos de clique nos números
  for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum
  }

  // Adicionar eventos de clique nos operadores
  for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum
  }

  // Adicionar evento de clique no sinal de igual
  equals.onclick = displayNum

  // Adicionar evento de clique no clear button
  el('#clear').onclick = clearAll

  // Adicionar evento de clique no reset button
  el('#reset').onclick = function() {
    window.location = window.location
  }
}())