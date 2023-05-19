// par nome/valor
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2, contexto de onde se encontra as palvras
    return saudacao // para ele retorna o valor de cima
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)