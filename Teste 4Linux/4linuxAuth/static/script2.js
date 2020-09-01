// Parte responsável pelo consumo da API

let allApi = []
let globalAPI = []

// Retornará uma Promise
const fetchPublic = async () => {
  const response = await fetch('https://api.publicapis.org/entries') // Esse response ainda não é o json que vc quer
  const responseToJson = await response.json() // Agora sim
  console.log(responseToJson)

  const entriesAPI = responseToJson.entries
  allApi = entriesAPI.map(entries => {
    const { API, Description, Link, Category } = entries
    return {
      nameAPI: API,
      descriptionAPI: Description,
      linkAPI: Link,
      categoryAPI: Category
    }
  })
  const allAPISort = allApi.sort((a, b) => a.nameAPI.localeCompare(b.nameAPI))
  globalAPI = [...allAPISort]
  console.log(globalAPI)
}

const promiseAPI = () => {
  return new Promise((resolve, reject) => { // Estou criando um objeto do tipo Promise
    fetchPublic()
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

// Função para esconder o loading após carregamento
const hideSpinner = () => {
  document.querySelector('#spinner').classList.add('hide') // Classe própria do materialize
}

// Função para renderizar as informações mapeadas da API na tela
const render = () => {
  const divAPI = document.querySelector('#divAPI')

  divAPI.innerHTML = `
    <div class="row">
        ${globalAPI.map(({ nameAPI, descriptionAPI, linkAPI, categoryAPI }) => {
          return `
            <div class="col s12 pull-s7">
              <div class="flex-row bordered">
                <span style="margin-right: 20px; font-size: 20px;">Nome: <b>${nameAPI}</b></span>
                <div class="flex-column">
                <span style="margin-right: 20px;">Descrição: <b>${descriptionAPI}</b></span>
                <span style="margin-right: 20px;">Link: <b>${linkAPI}</b></span>
                <span >Categoria: <b>${categoryAPI}</b></span>
                </div>
              </div>
            </div>
          `
        }).join('')}
    </div>
  `
}

const start = async () => {
  const onlyPromise = promiseAPI()
  await Promise.all([onlyPromise])
  hideSpinner()
  render()
}

start()
