// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'


// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

document.addEventListener("DOMContentLoaded", () => {
    const trigerSidebar = document.querySelector('[data-bs-toggle=sidebar]')
    if (trigerSidebar) {
        trigerSidebar
            .addEventListener('click', event => {
                let targetSidenav = document.querySelector(event.currentTarget.getAttribute('data-bs-target'))
                if (!targetSidenav) return;
                if (targetSidenav.classList.contains('hidden')) {
                    targetSidenav.classList.remove("hidden")
                } else {
                    targetSidenav.classList.add("hidden")
                }
            })
    }
});
