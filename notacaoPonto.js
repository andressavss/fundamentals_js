// Notação Ponto é usada para acessar atributos que estão visíveis dentro de um determinado objeto
// Está presente em toda linguagem e é extremamente importante para O JavaScript
// É importante para a organização
console.log(Math.ceil(6.1)) // Ceil arredonda para cima ou para baixo

const obj1= {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // Forma não adequada
console.log (obj1.nome)

function Object(nome) {
    this.nome = nome // O nome associado a partir dessa funçao, você pode criar um atributo ou função e colocar em público
}

const obj2= new Object('Cadeira')
const obj3 = new Object('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)