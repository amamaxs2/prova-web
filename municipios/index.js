function changePageTitle(title) {
    document.title = title
  }
  
  async function getData(uf) {
  
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  
      const jsonData = await data.json()

      array = Object.values(jsonData)

        for (let cont = 0; cont < array.length; cont++){

            var ul = document.querySelector("ul")

            var li = document.createElement("li")
            var a = document.createElement("a")
            var botao = document.createElement("button")
            botao.textContent = "Favoritar"
            a.textContent = array[cont].nome
            a.href = `./municipios/index.html?uf=${array[cont].sigla}`
            
            ul.appendChild(li)
            li.appendChild(a)
            li.appendChild(botao)
        }
    } catch (error) {
      console.error(error)
    }
  }
  
  function paramPesquisa() {
    if (!location.search) {
      return
    }
  
    const urlSearchParams = new URLSearchParams(location.search)
  
    const UF = urlSearchParams.get('uf')
  
    changePageTitle(`Municípios de ${UF}`)
    getData(UF)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    paramPesquisa()
  })