class Cadastro {

    static Cadastro() {

        const nomeCadastro = document.querySelector("#nomeCadastro")
        const emailCadastro = document.querySelector("#emailCadastro")
        const cadastroTrabalhaCom = document.querySelector("#tipoTrabalho")
        const cadastroImage = document.querySelector("#urlPerfilImg")
        const senhaCadastro = document.querySelector("#senhaCadastro")

        const btnCadstro = document.querySelector("#cadastrar")

        btnCadstro.addEventListener("click", (e) => {

            e.preventDefault()
            const body = {
                username: nomeCadastro.value,
                email: emailCadastro.value,
                password: senhaCadastro.value,
                work_at: cadastroTrabalhaCom.value,
                image: cadastroImage.value
            }
            console.log(body)
        })

    }

}
Cadastro.Cadastro()

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
