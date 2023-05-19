const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

// Por conta de Let tem o escopo em bloco de cógico, ele lembra da variável anterior