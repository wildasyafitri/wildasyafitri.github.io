

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

// Fungsi untuk mengatur cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Fungsi untuk mendapatkan nilai cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Fungsi untuk menghapus cookie
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999; path=/";
}

// Cek apakah pengguna sudah mengunjungi halaman sebelumnya
window.onload = function() {
    const visitCount = getCookie("visitCount");
    
    if (visitCount) {
        // Jika cookie sudah ada, tingkatkan jumlah kunjungan
        const newCount = parseInt(visitCount) + 1;
        setCookie("visitCount", newCount, 30); // Perbarui untuk 30 hari ke depan
        messageText.textContent = `Selamat datang kembali! Ini kunjungan ke-${newCount} Anda.`;
    } else {
        // Jika cookie belum ada, buat cookie baru
        setCookie("visitCount", "1", 30);
        messageText.textContent = "Selamat datang di situs kami untuk pertama kalinya!";
    }
    
    // Simpan username dalam cookie jika belum ada
    if (!getCookie("username")) {
        setCookie("username", "Pengunjung", 365); // Simpan selama 1 tahun
    }
    
    console.log("Cookies yang tersimpan:", document.cookie);
};
