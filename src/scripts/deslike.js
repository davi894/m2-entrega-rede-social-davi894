import { InfoApi } from "./models/api.js"
//console.log(await InfoApi.BuscarUsuarios())

const deslikesArrayComentarios = await InfoApi.ListarPostes()
//console.log(deslikes.results)
//console.log(deslikesArrayComentarios.results)
const deslikando = deslikesArrayComentarios.results

async function deslike() {


    deslikando.forEach((elem) => {
        console.log(elem.likes["uuid"])
    })

    await InfoApi.degostarPost()
}
deslike()
export { deslike } 