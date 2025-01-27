document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Selamat Datang!');
});
document.getElementById('goToPage').addEventListener('click', function() {
    // Pindah ke halaman lain dengan JavaScript
    window.location.href = "nada.html"; // Ganti dengan URL yang diinginkan
});
// Fungsi untuk scroll ke bagian konten
function scrollToContent() {
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });
}
