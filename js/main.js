const containerLogin = document.querySelector(".containerLogin")
const containerSignUP = document.querySelector(".containerSignUP")
let token = null
let formLogin = document.querySelector(".formLogin")
let formSignUP = document.querySelector(".formSignUP")

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

function switchPage(){
    let buttonSwitchSignUP = document.querySelector(".buttonSwitchSignUP")
    let buttonSwitchLogin = document.querySelector(".buttonSwitchLogin")



    buttonSwitchSignUP.addEventListener('click', () => {

        formLogin.style.display = "none"
        formSignUP.style.display= "block"


    })

    buttonSwitchLogin.addEventListener('click', () => {
        formLogin.style.display = "block"
        formSignUP.style.display = "none"

    })
}


function displayLoginForm(){


    formLogin.style.display = "block"
    formSignUP.style.display= "none"

    let username = document.querySelector(".usernameLogin")
    let password =  document.querySelector(".passwordLogin")
    let submitLogin = document.querySelector(".submitLogin")

    submitLogin.addEventListener('click', () => {

        login(username.value, password.value).then((data) => {
            token = data
            alert("tu t'es connecté ")
            // ici afficher le display du chat après le Login
            console.log(token)
//sallut
        })
    })
}











if(!token){
    displayLoginForm()
    switchPage()
}else {
    //displayChat()
    //displayMessage()
}

