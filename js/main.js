
let token = null
const formLogin = document.querySelector(".formLogin")
const  formSignUP = document.querySelector(".formSignUP")
const buttonSignup = document.querySelector(".buttonSignUP")
const buttonLogin = document.querySelector(".buttonLogin")
//test22

async function login(username, password){
    console.log(username, password)

    let paramsLogin = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({
            username : username,
            password: password,
        })
    }

    return await fetch('https://b1messenger.esdlyon.dev/login', paramsLogin)
        .then((response) => response.json())
        .then((json) => {

            return json.token

        })
}

buttonLogin.addEventListener('click', () => {
    formSignUP.style.display = "block"
    formLogin.style.display = "none"

})















