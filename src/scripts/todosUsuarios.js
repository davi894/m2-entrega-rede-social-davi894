import { InfoApi } from "./models/api.js"

await InfoApi.BuscarUsuarios(2)

async function renderizando(arrayCadastrados) {

    const result = arrayCadastrados.results

    result.forEach(element => {
        element
    })
}
renderizando(await InfoApi.BuscarUsuarios(10))
export { renderizando }