// Novo recurso do ES2015
// É utilizado para desestruturação, uma forma de tirar a atribuição do objeto, ou do array, por exemplo.
// Tenha certeza que o caminho que vai você está usando esteja definido

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const  { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num }} = pessoa
console.log(ag, num)