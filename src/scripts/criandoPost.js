
import { InfoApi } from "./models/api.js"

class criandoPost {
    static async post() {
        const btnPostar = document.querySelector("#btnPostar")

        btnPostar.addEventListener("click", async (e) => {
            const input = document.querySelector("#input_tituloConteudoPost").value
            const texteArea = document.querySelector("#textarea_tituloConteudoPost").value

            const body = {
                title: input,
                description: texteArea
            }
            console.log(body)
            await InfoApi.CriarPost(body)
        })
    }
}
criandoPost.post()
