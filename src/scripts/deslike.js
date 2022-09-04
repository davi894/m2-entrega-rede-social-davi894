import { InfoApi } from "./models/api.js"
async function deslike(uuidPost) {

    console.log(uuidPost)
    const btnDelike = document.querySelector(".like")
    btnDelike.addEventListener("click", async (e) => {
        console.log(e.target)
        await InfoApi.degostarPost(uuidPost)
    })
}
export { deslike } 