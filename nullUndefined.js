let valor // não incializada
console.log(valor)
// console.log(valor2) // não tem como iniciar uma variável que não está definida

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Dará erro, pois a variável tem uma ausência de valor

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

// Atruibuição por valor: você faz uma "cópia" daquele valor, cada variável terá seu valor independente
// Atribuição por referência: Quando você "copia" o endereço de memória, as duas variáveis apontarão para o mesmo lugar