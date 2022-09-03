import { InfoApi } from "./models/api.js"
async function deslike(uuidPost) {
    const arrayUuid = []
    arrayUuid.push(uuidPost)
    const btnDelike = document.querySelector(".like")
    btnDelike.addEventListener("click", async (e) => {
        await InfoApi.degostarPost(uuidPost)
    })
}
export { deslike } 