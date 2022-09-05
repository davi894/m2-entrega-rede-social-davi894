import { InfoApi } from "./models/api.js"
await InfoApi.BuscarUsuarios()
async function renderizando(arrayCadastrados) {
    const result = arrayCadastrados.results
    result.forEach(element => {
      //  console.log(element)
    })
}
renderizando(await InfoApi.BuscarUsuarios(10))
export { renderizando }