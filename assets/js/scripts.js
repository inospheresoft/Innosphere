document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo"); // Navbar logo
    const overlay = document.getElementById("overlay");
    const menuItems = document.querySelectorAll(".overlay-content a"); // All menu links
    const overlayLogo = document.getElementById("overlay-logo"); // Logo inside overlay
    const overlayBackdrop = document.getElementById("overlay-backdrop"); // Clickable black area
    const body = document.body;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function toggleOverlay() {
        if (isMobile()) {
            overlay.classList.toggle("active");
            body.style.overflow = overlay.classList.contains("active") ? "hidden" : ""; // Disable scrolling
        }
    }

    function closeOverlay() {
        if (isMobile()) {
            overlay.classList.remove("active");
            body.style.overflow = ""; // Re-enable scrolling
        }
    }

    logo.addEventListener("click", toggleOverlay);
    overlayLogo.addEventListener("click", closeOverlay);
    overlayBackdrop.addEventListener("click", closeOverlay); // Close when clicking black area

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            if (isMobile()) {
                event.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                    setTimeout(closeOverlay, 400); // Close after scrolling
                }
            }
        });
    });
});


// Autor: Innosphere
    // to open  and close the sidebar
    window.addEventListener('DOMContentLoaded', () => {
        const logoContainers = document.querySelectorAll('#logo-container, #logo-container-1');
        const navmobile = document.querySelector('#nav-mobile');

        logoContainers.forEach(logocontainer => {
            logocontainer.addEventListener('click', () => {
                navmobile.classList.toggle('show');
            });
        });

        // Close navmobile when touching any element outside of it
        document.addEventListener('click', (event) => {
            if (!navmobile.contains(event.target) && !event.target.closest('#logo-container') && !event.target.closest('#logo-container-1')) {
                navmobile.classList.remove('show');
            }
        });
    });
    
    // close the sideabr when resizing the screen
    window.addEventListener('resize', () => {
        const navmobile = document.querySelector('#nav-mobile');
        if (window.innerWidth > 992) {
            if  (navmobile.className.includes('show')) {
                navmobile.classList.remove('show');
            }
        }
    });
    
     // show the btnlight when the screen size is medium size
    function toggleButtonVisibility() {
        const btnlight = document.querySelector('#btn-light');
    
        if (!btnlight) return; // Prevent errors if element is missing
    
        if (window.innerWidth > 992) {
            btnlight.style.display = "none"; // Hide button
        } else {
            btnlight.style.display = "block"; // Show button
        }
    }
    
    // Run on page load
    toggleButtonVisibility();
    
    // Run on resize
    window.addEventListener('resize', toggleButtonVisibility);

    


    // remove br tags
    let originalBrTags = [];

function toggleBrTags() {
    if (window.innerWidth < 992) {
        document.querySelectorAll('br').forEach(br => {
            originalBrTags.push({ element: br, parent: br.parentNode, nextSibling: br.nextSibling });
            br.remove();
        });
    } else {
        originalBrTags.forEach(item => {
            if (item.parent) {
                item.parent.insertBefore(document.createElement('br'), item.nextSibling);
            }
        });
        originalBrTags = [];
    }
}

