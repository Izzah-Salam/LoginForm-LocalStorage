// click event when user sign up the data

const SignupBtn = document.getElementById("Signup");
SignupBtn.addEventListener("click",signup)


// get data from signUp

function signup(){
   const name = document.getElementById("name").value
   const Username = document.getElementById("Username").value
   const email = document.getElementById("email").value
   const password = document.getElementById("password").value
   const confirmPass = document.getElementById("confirmPass").value

   // set these variable into local storage 


   localStorage.setItem("name",name)
   localStorage.setItem("Username",Username)
   localStorage.setItem("email",email)
   localStorage.setItem("password",password)
   localStorage.setItem("confirmPass",confirmPass)

   
}


// click event when user sign in button click

const signin = document.getElementById("signin")

signin.addEventListener("click", signIn)


// get value from sign in 

function signIn(){
    const signinUser = document.getElementById("username").value
    const pass = document.getElementById("Pass").value


    // getValue from local storage

    const userName = localStorage.getItem("Username")
    const password = localStorage.getItem("password")


    // now compare local storage data and input data to authenticity

    if(signinUser === userName && pass=== password){
        window.location.href = "./welcome.html"
    }

    else{
        alert("Wrong Email and Password")
    }

}