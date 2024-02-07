// evenr when user sign up the data

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