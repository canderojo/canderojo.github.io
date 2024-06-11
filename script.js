// SignUp.html

// Function to store the values inputted in SignUp.html
function storeSignUpValues() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store the values in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Open the SignIn.html
    window.location.href = "signIn.html";
}

// SignIn.html

// Function to verify the values inputted in SignIn.html
function verifySignInValues() {
    // Prevent the form from submitting (which would refresh the page)
    event.preventDefault();

    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve the stored values from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if the input values match the stored values
    if (username === storedUsername && password === storedPassword) {
        // Values match, perform sign in logic
        alert("Sign In exitoso");
        // Redirect to index.html
        window.location.href = "index.html";

    } else {
        // Values do not match, display error message
        alert("La contraseña o el usuario no coinciden")

        // Redirect to SignIn.html
        window.location.href = "signIn.html";
    }
}