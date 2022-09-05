class InfoApi {
    static URLbase = `https://m2-rede-social.herokuapp.com/api/`
    static IdUsuario = localStorage.getItem("RedeSocialUser:Id")
    static token = localStorage.getItem("RedeSocialUser:Token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.token}`
    }
    static async BuscarUsuarios() {
        const users = await fetch(`${this.URLbase}users/`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return users
    }
    static async BuscaUsuarioEspecifico() {
        const usuarioEspecifico = await fetch(`${this.URLbase}users/${this.IdUsuario}/`, {
            method: "GET",
            headers: this.headers,
        }).then(resp => resp.json())
            .then(resp => resp)
        return usuarioEspecifico
    }
    static async SeguirUsuario(body) {
        //console.log(body)
        await fetch(`${this.URLbase}users/follow/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(resp => resp.json())
            .then(resp => {
                resp
                /*  console.log(resp) */
            })
    }
    static async ParardeSeguirUsuario(uuidFollow) {
        await fetch(`${this.headers}likes/${uuidFollow}/`, {
            method: "DELETE",
            headers: this.headers,
        }).then(resp => resp.json())
            .then(resp => {
                resp
                console.log(resp)
            })
    }
    static async Cadastro(body) {
        const teste = await fetch(`${this.URLbase}users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(err => err)
        return teste
    }
    static async Login(body) {
        const tokenUser = localStorage.getItem("RedeSocialUser:Token")
        await fetch(`${this.URLbase}users/login/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => {
                localStorage.setItem("RedeSocialUser:Id", resp.user_uuid)
                localStorage.setItem("RedeSocialUser:Token", resp.token)
                if (tokenUser) {
                    alert("Login com sucesso");
                    window.location.replace("../src/pages/homePageRedeSocial.html")
                }
            })
            .catch((err) => {
                alert(`email ou senha inválidos`);
            })
    }
    static async ListarPostes() {
        const buscarPosts = await fetch(`${this.URLbase}posts/`, {
            method: "GET",
            headers: this.headers,
        }).then(resp => resp.json())
            .then(resp => resp)
        return buscarPosts
    }
    static async CriarPost(body) {
        await fetch(`${this.URLbase}posts/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
    }
    static async MarcarComoGostei(body) {
        console.log(body)
        await fetch(`${this.URLbase}likes/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => resp /*  console.log(resp) */)
            .catch(err => console.log(err))
    }
    static async degostarPost(IdPostDeslike) {
        await fetch(`${this.headers}users/unfollow/${IdPostDeslike}/`, {
            method: "DELETE",
            headers: this.headers,
        })
    }
}
export { InfoApi }