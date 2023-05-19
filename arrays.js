// Array é uma forma de agrupar múltiplos valores de forma linear em uma estrutura só
// Em JavaScript o Array é heterogêneo, pode se colocar variáveis de qualquer tipo, não tem tamanho fixo
// tipo de dados dinâmico, aumenta e diminui

const valores =  [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores [4])

valores [4] = 10
console.log(valores)
console.log(valores.length) // vai dizer quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //  tira o último elemento do array
delete valores [0] // deleta, tira o elemento escolhido
console.log(valores)

console.log(typeof valores)

