import { InfoApi } from "../scripts/models/api.js"
console.log(await InfoApi.BuscarUsuarios())
const userEspecifico = await InfoApi.BuscarUsuarios()

console.log(userEspecifico)
async function buscandoUsuarioEspecifico() {
    const usuarioEspecifico = userEspecifico.results
    usuarioEspecifico.forEach(async (element) => {
        await InfoApi.BuscaUsuarioEspecifico(element.author["uuido"])
    })
}
buscandoUsuarioEspecifico()