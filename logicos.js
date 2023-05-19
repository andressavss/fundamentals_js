function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || : é o ou
    const comprarTv50 = trabalho1 && trabalho2 // &&: e
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // Criação inteligente de um objeto, porque automaticamente ele vai criar o nome com a chave e o valor vai ser o valor daquela constante
}

console.log(compras(true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))



