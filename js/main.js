const containerLogin = document.querySelector(".containerLogin")
const containerSignUP = document.querySelector(".containerSignUP")
let token = null
const formLogin = document.querySelector(".formLogin")
const formSignUP = document.querySelector(".formSignUP")




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




function displayLoginForm(){

    containerLogin.style.display = "block"
    formLogin.style.display = "block"
    containerSignUP.style.display = "none"
    formSignUP.style.display= "none"

    let username = document.querySelector(".usernameLogin")
    let password =  document.querySelector(".passwordLogin")
    let submitLogin = document.querySelector(".submitLogin")

    submitLogin.addEventListener('click', () => {

        login(username.value, password.value).then((data) => {
            token = data
            alert("tu t'es connecté ")
            // ici afficher le displau du chat après le Login
            console.log(token)

        })
    })
}