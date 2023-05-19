let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1            // O valor negativo tem preferência
console.log(num1)

console.log(++num1 === num2--) // Vai resolver primeiro e somente depois vai decrementar
console.log(num1 === num2)


// FAÇA CÓDIGOS SIMPLES E DE FÁCIL ENTENDIMENTO