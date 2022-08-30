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
            body: body.json()
        })

    }


    static async Login() {
        await fetch(`${this.URLbase}users/login`, {
            method: "POST",
            headers: this.headers,
            body: body.json()
        })
    }


    static async BuscarUsuarios() {
        await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.URLbase}/users`,
            body: body.json()
        })
    }


    static async BuscaUsuarioEspecifico(IdUsuario) {
        await fetch(this.URLbase, {
            method: "GET",
            headers: `${this.headers}/users/${IdUsuario}`,
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

}

export { InfoApi }