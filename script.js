// function darkMode() {
//     let body = document.body;
//     body.classList.toggle("dark-mode");

// }

function gotolib() {
    const userConfirmation = confirm("Are you sure you wanna go to WBI Library?");

    if(userConfirmation) {
        window.open('https://library.wbi.ac.id/index.php', '_blank');   
    }
}
