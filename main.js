
document.addEventListener("DOMContentLoaded", function() {
    // click event when user sign up the data
    const SignupBtn = document.getElementById("Signup");
    SignupBtn.addEventListener("click", signup);

    // click event when user sign in button click
    const signin = document.getElementById("signin");
    signin.addEventListener("click", signIn);
});


let Users = [];

// get data from signUp

function signup(){
    let user = {
        name : document.getElementById("name").value,
        Username : document.getElementById("Username").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        confirmPass : document.getElementById("confirmPass").value,
    };

    // Retrieve existing user list from local storage or initialize an empty array
    let storedUsers = localStorage.getItem("UserList") ? JSON.parse(localStorage.getItem("UserList")) : [];
    
    // Append the new user to the existing data
    storedUsers.push(user);

    // Store the updated user list back into local storage
    localStorage.setItem("UserList", JSON.stringify(storedUsers));

    // Store username and password separately for signin
    localStorage.setItem("username", user.Username);
    localStorage.setItem("password", user.password);

    // Clear input fields after signup
    document.getElementById("name").value = "";
    document.getElementById("Username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPass").value = "";
}



function signIn() {
    const signinUser = document.getElementById("username").value;
    const pass = document.getElementById("Pass").value;

    // Retrieve user list from local storage
    const storedUsers = localStorage.getItem("UserList") ? JSON.parse(localStorage.getItem("UserList")) : [];

    // Check if there is a user with the entered username and password
    const user = storedUsers.find(user => user.Username === signinUser && user.password === pass);

    // If user is found, redirect to welcome page, otherwise, show error message
    if (user) {
        window.location.href = "./welcome.html";
    } else {
        alert("Wrong Email and Password");
    }
}
