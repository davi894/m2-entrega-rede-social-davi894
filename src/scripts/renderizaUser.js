import { InfoApi } from "./models/api.js"
const usuarios = await InfoApi.Cadastro()
//console.log(idUser)
//console.log(usuarios)
async function usuarioAleatorio(dados) {
    const todosUsuarios = usuarios
    // console.log(todosUsuarios)
    const divId = document.querySelector("#usuarioPost")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const spanAt_Work = document.createElement("span")
    const spanSeguidores = document.createElement("span")
}
usuarioAleatorio()
export { usuarioAleatorio }
