
import { InfoApi } from "./models/api.js"

class Login {

    static Login() {
        const emailLogin = document.querySelector("#emailLogin")
        const senhaLogin = document.querySelector("#senhaLogin")
        const btnLogin = document.querySelector("#logar")

        btnLogin.addEventListener("click", async (e) => {

            e.preventDefault()
            const body = {
                "email": emailLogin.value,
                "password": senhaLogin.value,
            }
            await InfoApi.Login()
        })
    }

}

Login.Login()

