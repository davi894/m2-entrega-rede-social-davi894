import { InfoApi } from "./models/api.js"

const arrayComentarios = await InfoApi.ListarPostes()
//console.log(arrayComentarios)
async function renderizar() {

    const body = document.querySelector("body")

    const result = arrayComentarios.results

    const ulPosts = document.querySelector("ul")

    result.forEach((elem) => {

        const li = document.createElement("li")

        const div = document.createElement("div")
        div.classList.add("usuarioPost")

        const img = document.createElement("img")
        img.src = elem.author["image"]

        const divuser = document.createElement("div")
        const h2 = document.createElement("h2")
        const span = document.createElement("span")
        h2.innerText = `${elem.author["username"]}`
        span.innerText = `${elem.author["work_at"]}`

        const divConteudo = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        h3.innerText = `${elem.title}`
        p.innerText = `${elem.description}`

        const button = document.createElement("button")
        button.classList.add("abrirPost")
        button.innerText = "abrir post"

        button.addEventListener("click", (e) => {
            console.log(e.target)

            const article = document.createElement("article")

            const img = document.createElement("img")
            img.src = elem.author["image"]

            const nome = document.createElement("h2")
            nome.innerText = elem.author["username"]

            const trabalhomdal = document.createElement("span")
            trabalhomdal.innerText = elem.author["work_at"]

            const div = document.createElement("div")

            const divdiv = document.createElement("div")

            const h2 = document.createElement("h2")
            h2.innerText = elem.title

            const pConteudo = document.createElement("p")
            pConteudo.innerText = elem.description

            const spanSairModal = document.createElement("span")
            spanSairModal.classList.add("sairModal")
            spanSairModal.innerText = "X"

            div.append(nome, trabalhomdal,)
            divdiv.append(img, div)
            article.append(divdiv, h2, pConteudo, spanSairModal)
            body.append(article)

            spanSairModal.addEventListener("click", (e) => {
                const modal = document.querySelector("article")
                modal.parentNode.removeChild(modal)
            })
        })

        const imgCoracaoVazio = document.createElement("img")
        imgCoracaoVazio.src = "../assets/heartBlack.png"
        imgCoracaoVazio.classList.add("like")
        imgCoracaoVazio.addEventListener("click", async (e) => {
            imgCoracaoVazio.src = "../assets/heartRed.png"
            const body = {
                post_uuid: elem.uuid
            }
            await InfoApi.MarcarComoGostei(body)
        })

        const spanCurtidas = document.createElement("span")
        spanCurtidas.innerText = elem.likes.length

        divConteudo.append(h3, p)
        divuser.append(h2, span)
        li.append(img, divuser, divConteudo, button, imgCoracaoVazio, spanCurtidas)
        ulPosts.appendChild(li)
    })
}

renderizar()