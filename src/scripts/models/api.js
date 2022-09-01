class InfoApi {

    static URLbase = `https://m2-rede-social.herokuapp.com/api/`

    static IdUsuario = localStorage.getItem("RedeSocialUsers:Id")

    static token = localStorage.getItem("RedeSocialUsers:Token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.token}`
    }

    static async Cadastro(body) {
        console.log(body)
        const teste = await fetch(`${this.URLbase}users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(resp => console.log(resp))
            .catch(err => console.log(err))

        // const data = await teste.json()
        // console.log(data)
    }

    static async Login(body) {
        console.log(body)
        const tokenUser = localStorage.getItem("RedeSocialUser:Token")
        await fetch(`${this.URLbase}users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => console.log(resp.json()))
            .then(resp => {
                console.log(resp)
                localStorage.setItem("RedeSocialUser:Id", resp.user_uuid)
                localStorage.setItem("RedeSocialUser:Token", resp.token)
                if (!tokenUser) { window.location.replace("./src/pages/homePageRedeSocial.html") }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static async BuscarUsuarios() {
        const users = await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.URLbase}users`,
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
        console.log(users)

        return users
    }

    static async BuscaUsuarioEspecifico() {
        const usuarioEspecifico = await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.headers}users/${this.IdUsuario}`,
        })

        return usuarioEspecifico
    }

    static async SeguirUsuario(body) {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}users/follow`,
            body: JSON.stringify(body)
        })
    }

    static async ParardeSeguirUsuario(IdDeixarSeguir) {
        await fetch(this.URLbase, {
            method: "DELETE",
            headers: `${this.headers}users/unfollow/${IdDeixarSeguir}`,
        })

    }

    static async CriarPost(body) {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}api/posts`,
            body: JSON.stringify(body)
        })
    }

    static async ListarPostes(numPage) {
        const buscarPosts = await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.URLbase}?page=${numPage}`,
        })
        return buscarPosts
    }

    static async MarcarComoGostei() {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}api/likes`,
            body: JSON.stringify(body)
        })
    }

    static async DeletarPost(IdPostDeletar) {
        await fetch(this.URLbase, {
            method: "DELETE",
            headers: `${this.headers}users/unfollow/${IdPostDeletar}`,
        })
    }
}

export { InfoApi }