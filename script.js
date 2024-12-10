document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMenuBtn = document.getElementById("close-menu");
    const submenuItems = document.querySelectorAll(".mobile-menu .menu-item[data-submenu]");
    const submenuMobiles = document.querySelectorAll(".submenu-mobile");
    const backBtns = document.querySelectorAll(".submenu-mobile .back-btn");

    // Function to open the mobile navigation
    function openMobileNav() {
        mobileNav.style.right = "0";
    }

    // Function to close the mobile navigation
    function closeMobileNav() {
        mobileNav.style.right = "-250px";
        // Also close any open submenu
        submenuMobiles.forEach(submenu => {
            submenu.style.left = "-250px";
        });
    }

    // Function to open a submenu
    function openSubmenu(submenuId) {
        const submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.style.left = "0";
        }
    }

    // Function to close a submenu
    function closeSubmenu(submenu) {
        submenu.style.left = "-250px";
    }

    // Event listener to open mobile nav
    mobileMenuToggle.addEventListener("click", openMobileNav);

    // Event listener to close mobile nav
    closeMenuBtn.addEventListener("click", closeMobileNav);

    // Event listeners to open submenus
    submenuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const submenuId = this.getAttribute("data-submenu");
            openSubmenu(submenuId);
        });
    });

    // Event listeners to close submenus via back button
    backBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const submenu = this.parentElement;
            closeSubmenu(submenu);
        });
    });

    // Optional: Close mobile nav when clicking outside
    document.addEventListener("click", function(e) {
        if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileNav();
        }
    });
});
