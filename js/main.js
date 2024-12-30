
let token = null
const pageLogin = document.querySelector(".pageLogin")
const pageSignUP = document.querySelector(".pageSignUP")
const buttonSignup = document.querySelector(".buttonSignUP")
const buttonLogin = document.querySelector(".buttonLogin")

const containerLog = document.querySelector(".containerLog")
const containerLogin = document.querySelector(".containerLogin")
const containerSignUP = document.querySelector(".containerSignUP")
const pageMessagerie = document.querySelector(".pageMessagerie")

const submitSignUP = document.querySelector(".submitSignUP")
const submitLogin = document.querySelector(".submitLogin")

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
    containerSignUP.style.display = "none";
    containerLogin.style.display = "block";
})

submitSignUP.addEventListener('click', () => {

    const usernameSignUp = document.querySelector(".usernameSignUP")
    const passwordSignUP = document.querySelector(".passwordSignUP")

    let paramsSignUP =  {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({
            username : usernameSignUp.value,
            password: passwordSignUP.value,
        })
    }
    fetch('https://b1messenger.esdlyon.dev/register', paramsSignUP)
        .then((response) => response.json())
        .then((json) =>{

            containerSignUP.style.display = "none";
            containerLogin.style.display = "block";
        })
})

submitLogin.addEventListener('click', () => {
    const usernameLogin = document.querySelector(".usernameLogin")
    const passwordLogin = document.querySelector(".passwordLogin")

    login(usernameLogin, passwordLogin)
        .then((response) => {
            token = response

            if (!(token===null||token===undefined)) {
                return true
            }
            containerLog.style.display = "none";
            pageMessagerie.style.display = "block";

        })
})













