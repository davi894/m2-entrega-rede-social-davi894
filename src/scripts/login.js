import { InfoApi } from "./models/api.js"
class Logando {
    static async logar() {
        const emailLogin = document.querySelector("#emailLogin")
        const senhaLogin = document.querySelector("#senhaLogin")
        const btnLogin = document.querySelector("#logar")
        btnLogin.addEventListener("click", async (e) => {
            e.preventDefault()
            const body = {
                email: emailLogin.value,
                password: senhaLogin.value,
            }
            //console.log(body)
            await InfoApi.Login(body)
        })
    }
}
Logando.logar()

