// Dark Mode Toggle Function
function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    
    // Save user preference to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        console.log("Dark mode enabled");
    } else {
        localStorage.setItem("theme", "light");
        console.log("Light mode enabled");
    }
}

// Check for saved user preference on page load
function checkTheme() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Run theme check when page loads
document.addEventListener("DOMContentLoaded", checkTheme);

// Library redirect function
function gotolib() {
    const userConfirmation = confirm("Apakah Anda yakin ingin membuka halaman perpustakaan?");
    if(userConfirmation) {
        window.open('https://library.usu.ac.id/', '_blank');   
    } else {
        console.log("User canceled the action");
    }
}

// Simple animation function
function animateButton(btnId) {
    const button = document.getElementById(btnId);
    button.classList.add("button-clicked");
    
    setTimeout(() => {
        button.classList.remove("button-clicked");
    }, 300);
}

// Simple form validation
function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    
    if (nameInput.value === "") {
        alert("Nama tidak boleh kosong!");
        return false;
    }
    
    if (emailInput.value === "" || !emailInput.value.includes("@")) {
        alert("Email tidak valid!");
        return false;
    }
    
    return true;
}
