const filmes = [
    {
        nome:'Gente Grande',
        diretor: 'Adam Sandler',
        ano: 2021
    },
    {
        nome:'todo mundo em panico',
        diretor:'michael Jackson',
        ano:2005
    },
    {
        nome:'meninas malvadas',
        diretor:'Lindsay Lohan',
        ano:2002
    }
]

console.log(filmes.map(e => e.nome))
console.log(filmes.filter(e=>e.ano>2006))