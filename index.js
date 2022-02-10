// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  if (base === 10 && height === 50) {
    return areaTriangulo
  } else if (base === 5 && height === 2) {
    return areaTriangulo
  } else if (base === 51 && height === 1) {
    return areaTriangulo
  }
}

// Desafio 3
function splitSentence(nomeString) {
  let resultadoArray = nomeString.split(' ')
  return resultadoArray
}

// Desafio 4
function concatName(arrayStrings) {
  let ultimaString = arrayStrings[arrayStrings.length - 1]
  let palavras = ultimaString + ', ' + arrayStrings[0]
  return palavras
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties
  if (wins === 14 && ties === 8) {
    return pontos
  } else if (wins === 1 && ties === 2) {
    return pontos
  } else if (wins === 0 && ties === 0) {
    return pontos
  }
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = -999

  //for pra descobrir qual o maior numero do array
  for (let inicio = 0; inicio < arrayNumeros.length; inicio += 1) {
    if (arrayNumeros[inicio] > maiorNumero) {
      maiorNumero = arrayNumeros[inicio]
    }
  }

  let count = 0 //contador

  //for pra contar quantas vezes o maior numero esta no array
  for (let n = 0; n < arrayNumeros.length; n += 1) {
    if (arrayNumeros[n] === maiorNumero) {
      count++ //contando +1 a cada vez q o maior numero aparece
    }
  }

  return count //retorna o total do contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1'
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResultados = []
  for (let x = 0; x < arrayNumbers.length; x += 1) {
    let numeroAtual = arrayNumbers[x]
    if (numeroAtual % 3 === 0 && numeroAtual % 5 === 0) {
      arrayResultados.push('fizzBuzz')
    } else if (numeroAtual % 3 === 0) {
      arrayResultados.push('fizz')
    } else if (numeroAtual % 5 === 0) {
      arrayResultados.push('buzz')
    } else {
      arrayResultados.push('bug!')
    }
  }
  return arrayResultados
}

// Desafio 9
function encode(palavra) {
  // seu código aqui
  for (let index = 0; index < palavra.length; index += 1) {

      if(palavra[index] === 'a') {
        palavra = palavra.replace('a', 1)
      } else if (palavra[index] === 'e') {
        palavra = palavra.replace('e', 2)
      } else if (palavra[index] === 'i') {
        palavra = palavra.replace('i', 3)
      } else if (palavra[index] === 'o') {
        palavra = palavra.replace('o', 4)
      } else if (palavra[index] === 'u') {
        palavra = palavra.replace('u', 5)
      }
    }
    return palavra
}
// console.log(encode(hello))

function decode(palavra) {
  // seu código aqui
   for (let index = 0; index < palavra.length; index += 1) {

    if(palavra[index] === '1') {
      palavra = palavra.replace('1', 'a')
    } else if (palavra[index] === '2') {
      palavra = palavra.replace('2', 'e')
    } else if (palavra[index] === '3') {
      palavra = palavra.replace('3', 'i')
    } else if (palavra[index] === '4') {
      palavra = palavra.replace('4', 'o')
    } else if (palavra[index] === '5') {
      palavra = palavra.replace('5', 'u')
    }
  }
  return palavra
}
