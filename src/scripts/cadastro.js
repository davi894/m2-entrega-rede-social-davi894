import { InfoApi } from "./models/api.js"

const btnCadstro = document.querySelector("#cadastrar")


class Cadastro {

    static async Cadastro() {

        const nomeCadastro = document.querySelector("#nomeCadastro")
        const emailCadastro = document.querySelector("#emailCadastro")
        const cadastroTrabalhaCom = document.querySelector("#tipoTrabalho")
        const cadastroImage = document.querySelector("#urlPerfilImg")
        const senhaCadastro = document.querySelector("#senhaCadastro")
        const body = {
            username: nomeCadastro.value,
            email: emailCadastro.value,
            password: senhaCadastro.value,
            work_at: cadastroTrabalhaCom.value,
            image: cadastroImage.value
        }
        console.log(body)
        await InfoApi.Cadastro(body)
    }
}
btnCadstro.addEventListener("click", async (e) => {
    e.preventDefault()
    await Cadastro.Cadastro()

})
class VoltarPaginaLogin {

    static voltandoPagina() {

        const voltaPagina = document.querySelectorAll(".voltarlogin")

        voltaPagina.forEach(elem => {
            elem.addEventListener("click", (e) => {
                window.location.assign("./homePageLogin.html")
            })
        });

    }


}
VoltarPaginaLogin.voltandoPagina()
