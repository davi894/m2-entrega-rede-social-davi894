class InfoApi {

    static URLbase = `https://m2-rede-social.herokuapp.com/api/users`

    static IdUsuario = localStorage.getItem("RedeSocialUsers:Id")

    static token = localStorage.getItem("RedeSocialUsers:Token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${this.token}`
    }

    static async Cadastro(body) {
        await fetch(`${this.URLbase}/users/`, {
            method: "POST",
            headers: this.headers,
            body: body.json(body)
        })

    }


    static async Login(body) {
        await fetch(`${this.URLbase}/users/login/`, {
            method: "POST",
            headers: this.headers,
            body: body.json(body)
        })
            .then(resp => resp.json())
            .then(resp => {
                resp.token
                resp.user_uuid
            })
    }


    static async BuscarUsuarios() {
        const users = await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.URLbase}/users/`,
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
        console.log(users)

        return users
    }


    static async BuscaUsuarioEspecifico() {
        await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.headers}/users/${this.IdUsuario}/`,
        })
    }

    static async SeguirUsuario(body) {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}/users/follow/`,
            body: JSON.stringify(body)
        })
    }

    static async ParardeSeguirUsuario(IdDeixarSeguir) {
        await fetch(this.URLbase, {
            method: "DELETE",
            headers: `${this.headers}/users/unfollow/${IdDeixarSeguir}/`,
        })

    }

    static CriarPost(body) {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}/api/posts/`,
            body: JSON.stringify(body)
        })
    }

    static ListarPostes(numPage) {
        const buscar = await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.URLbase}/?page=${numPage}/`,
        })
    }

    static MarcarComoGostei() {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}/api/likes/`,
            body: JSON.stringify(body)
        })
    }

    static DeletarPost(IdPostDeletar) {
        await fetch(this.URLbase, {
            method: "DELETE",
            headers: `${this.headers}/users/unfollow/${IdPostDeletar}/`,
        })

    }

}

export { InfoApi }