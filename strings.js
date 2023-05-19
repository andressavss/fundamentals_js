const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Código relacionado a tabela UniCode (3=51)
console.log(escola.indexOf('3')) // Índice associado ao dígito 3 dentro da palavra "escola"

console.log(escola.substring(1)) // Lerá do 1 para frente
console.log(escola.substring(0, 3)) // Lerá até o índice 3, sem incluir o índice 3

console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log('Escola '+ (escola) + ("!"))
console.log(escola.replace(3, 'e')) // Substituiu o número 3 pela letra E
console.log('Ana,Maria,Pedro'.split(",")) // Ocorre uma quebra usando Array