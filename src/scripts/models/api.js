class InfoApi {

    static URLbase = `https://m2-rede-social.herokuapp.com/api/users`

    static IdUsuario = localStorage.getItem("RedeSocialUsers:Id")

    static token = localStorage.getItem("RedeSocialUsers:Token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${this.token}`
    }

    static async Cadastro(body) {
        await fetch(`${this.URLbase}/users`, {
            method: "POST",
            headers: this.headers,
            body: body.json(body)
        })

    }


    static async Login(body) {
        await fetch(`${this.URLbase}users/login`, {
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
            headers: `${this.URLbase}/users`,
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
        console.log(users)

        return users
    }


    static async BuscaUsuarioEspecifico() {
        await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.headers}/users/${this.IdUsuario}`,
            body: body.json()
        })
    }

    static async SeguirUsuario() {
        await fetch(this.URLbase, {
            method: "POST",
            headers: `${this.headers}users/follow`,
            body: body.json()
        })
    }

    static async ParardeSeguirUsuario(IdDeixarSeguir) {
        await fetch(this.URLbase, {
            method: "DELETE",
            headers: `${this.headers}users/unfollow/${IdDeixarSeguir}`,
            body: body.json()
        })

    }

    static CriarPost() { }

    static buscarPost(numPage) {
        const buscar = await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.URLbase}/?page=${numPage}`,
        })
    }

    static Deletarpost() { }

}

export { InfoApi }