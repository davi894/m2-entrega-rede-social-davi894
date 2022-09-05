import { InfoApi } from "./models/api.js"

const usuario = await InfoApi.BuscaUsuarioEspecifico()
console.log(usuario)
const Usuario = usuario
console.log(Usuario)

async function USUARIO(dados) {

    const img = document.querySelector("#imagemUsuarioperfil")
    const h2 = document.querySelector("#nomeUsuario")
    const spanAt_Work = document.querySelector("#trabalho")
    const spanSeguidores = document.querySelector("#seguidores")

    img.src = usuario.image
    h2.innerText = usuario.username
    spanAt_Work.innerText = usuario.work_at
    spanSeguidores.innerText = usuario.followers_amount
}
USUARIO()
export { USUARIO }
