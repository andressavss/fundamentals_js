//  relacionais são utilizados para comparação/relação
// == : Igual, não considera os tipos
// === : Estritamente igual, considera os tipos
// Dê preferência para o estritamente, pois ele leva em consideração o valor e o tipo

console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // Estritamente igual. Geralmente mais utilizado
console.log('03)', '3' != 3) // != diferente ou igual
console.log('04)', '3' !== 3) // Estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2) // <= igual ou menor
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // São estritamente porque são do mesmo tipo e do mesmo valor

console.log('12)', undefined == null)
console.log('13)', undefined = null)


