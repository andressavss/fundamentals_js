const peso1 = 1.0 // Formas de usar a função "Number" dentro de JS
const peso2 = Number ('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log(media.toFixed(2)) // O tofixed não altera o valor de "media", ele apenas dá uma função à ela, ele retorna um valor novo, mas não altera
console.log(media.toString(2)) // Valor binário, 1 e 0
                               // Binário = Dois números
console.log(typeof media)
console.log(typeof Number)
