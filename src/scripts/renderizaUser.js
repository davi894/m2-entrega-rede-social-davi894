import { InfoApi } from "./models/api.js"

const usuario = await InfoApi.BuscaUsuarioEspecifico()
console.log(usuario)
const Usuario = usuario
console.log(Usuario)

async function USUARIO(dados) {

    const divId = document.querySelector("#usuarioPost")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const spanAt_Work = document.createElement("span")
    const spanSeguidores = document.createElement("span")
}
USUARIO()
export { USUARIO }
