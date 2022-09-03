import { InfoApi } from "../scripts/models/api.js"
const deixarDeseguir = await InfoApi.BuscarUsuarios()
async function deixandoDeSeguir() {
    const nSeguir = deixarDeseguir.results
    nSeguir.forEach(async (elem) => {
        await InfoApi.ParardeSeguirUsuario(elem.uuid)
    })
}
deixandoDeSeguir() 