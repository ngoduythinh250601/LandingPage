document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarCollapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Chỉ đóng navbar nếu đang mở (trên mobile)
            if (window.innerWidth < 768 && navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});