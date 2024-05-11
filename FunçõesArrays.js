const pessoas = ['Douglas', 'Felipe', 'MATHEUS']
const palavras = ['ola', 'bom dia', 'teste']

//percorrer array e não gera um retorno
pessoas.forEach(e => {
    e = e.toLowerCase()
                //operador ternário(lugar do if)
    console.log(e == 'douglas'? `Bem vindo douglas`: `Você não é o douglas, voce é o ${e}`)
}
)

//percorrer array e gerar retorno
const mapeada = pessoas.map((e) =>{
                //operador ternario
    return e == 'Felipe'? `${e} VAI CORINTHIANS`: `${e} VAI SANTOS`
})
console.log(mapeada)


//usando map na função
function uperCase(){
    return palavras.map(e => e.toUpperCase())
}

const teste = uperCase() 
console.log(teste)