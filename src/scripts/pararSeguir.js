
import { InfoApi } from "../scripts/models/api.js"

console.log(await InfoApi.BuscarUsuarios())

const deixarDeseguir = await InfoApi.BuscarUsuarios()

console.log()

async function deixandoDeSeguir() {

    const nSeguir = deixarDeseguir.results
    
    nSeguir.forEach(async (elem) => {
        await InfoApi.ParardeSeguirUsuario(elem.uuid)
    })
}

deixandoDeSeguir()