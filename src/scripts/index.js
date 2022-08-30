
import { InfoApi } from "../scripts/models/api.js"

const usuarios = await InfoApi.BuscarUsuarios()
console.log(usuarios)