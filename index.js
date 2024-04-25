async function listarEstados() {
    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)

        const jsonData = await data.json()

        array = Object.values(jsonData)

        for (let cont = 0; cont < array.length; cont++){

            var ul = document.querySelector("ul")

            var li = document.createElement("li")
            var a = document.createElement("a")
            a.textContent = array[cont].nome
            a.href = `./municipios/index.html?uf=${array[cont].sigla}`
            
            ul.appendChild(li)
            li.appendChild(a)
        }

    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    listarEstados()
})
