let chave = `f05b756281f8025cf3906080db8cc5c8`

let url = `https://pokeapi.co/api/v2/pokemon/pikachu`

fetch(url)

.then((Response) => {
    return Response.json()
})

.then((dados) => {
    console.log(dados)

    document.querySelector('#n').innerHTML = dados['name']
    var img1 = dados['sprites']['front_shiny_female']
    var img2 = dados['sprites']['back_female']
    var img3 = dados['sprites']['front_shiny']

    document.querySelector('img').setAttribute('src', img1)
    document.querySelector('#t').setAttribute('src', img2)
    document.querySelector('#v').setAttribute('src', img3)

    console.log(dados)
})