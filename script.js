

        const bookIcon = document.getElementById('bookIcon');
        const messageText = document.getElementById('messageText');
        
        bookIcon.addEventListener('click', function() {
            // Add pulse animation
            this.classList.add('pulse');
            
            // Show message
            messageText.classList.add('show');
            
            // Remove pulse animation after it completes
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 500);
            
            // Hide message after 3 seconds
            setTimeout(() => {
                messageText.classList.remove('show');
            }, 3000);
        });
        
function gotolib() {
    const userConfirmation = confirm("Are you sure you wanna go to WBI Library?");

    if(userConfirmation) {
        window.open('https://library.wbi.ac.id/index.php', '_blank');   
    }
}
document.cookie="username=Cookie;expires=Mon, 17 May 2025 23:59:59 GMT;path=/";
let cookie=document.cookie;
console.log(cookie);//Output:username=Cookie