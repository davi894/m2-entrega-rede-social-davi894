import { InfoApi } from "./models/api.js"

//console.log(await InfoApi.BuscarUsuarios())

const usuarios = await InfoApi.BuscarUsuarios()

//console.log(usuarios)

async function usuarioAleatorio() {

    const todosUsuarios = usuarios.results

    const seguidorUm = (Math.random() * ((todosUsuarios.length - 1) - 1) + 1).toFixed()
    const seguidorDois = (Math.random() * ((todosUsuarios.length - 1) - 1) + 1).toFixed()
    const seguidorTres = (Math.random() * ((todosUsuarios.length - 1) - 1) + 1).toFixed()

    const ul = document.querySelector("#paraSeguir")
    todosUsuarios.forEach((element, i, arr) => {
        if (i == seguidorUm || i == seguidorDois || i == seguidorTres) {

            const li = document.createElement("li")
            li.classList.add("paraSeguir_li")
            const img = document.createElement("img")
            img.src = element.image

            const div = document.createElement("div")
            const h2 = document.createElement("h2")
            h2.innerText = element.username

            const span = document.createElement("span")
            span.innerText = element.work_at

            const button = document.createElement("button")
            button.classList.add("paraSeguir_btn")
            button.innerText = "seguir"

            button.addEventListener("click", async (e) => {
                e.preventDefault()
                button.innerText = "seguindo"
                button.style.color = "white"
                button.style.backgroundColor = "black"

                const body = {
                    following_users_uuid: element.uuid
                }

                await InfoApi.SeguirUsuario(body)
            })

            div.append(h2, span)
            li.append(img, div, button)
            ul.appendChild(li)
        }
    });
}
usuarioAleatorio(await InfoApi.BuscarUsuarios(10))