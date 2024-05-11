const pessoas = ['Douglas', 'Felipe', 'MATHEUS']

//percorrer array e não gera um retorno
pessoas.forEach(e => {
    e = e.toLowerCase()

                //operador ternário(lugar do if)
    console.log(e == 'douglas'? `Bem vindo douglas`: `Você não é o douglas, voce é o ${e}`)
}
)

//percorrer array e gerar retorno
const Mapeada = pessoas.map((e) =>{
                //operador ternario
    return e == 'Felipe'? `${e} VAI CORINTHIANS`: `${e} VAI SANTOS`
})

console.log(Mapeada)