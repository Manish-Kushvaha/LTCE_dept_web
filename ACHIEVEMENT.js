document.addEventListener("DOMContentLoaded", function() {
    // Get all the box elements
    const boxes = document.querySelectorAll(".box");
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    // Function to highlight the active section in the navbar
    function highlightActiveSection() {
        for (const box of boxes) {
            const targetId = box.getAttribute("id");
            const targetElement = document.getElementById(targetId);

            if (isInViewport(targetElement)) {
                box.classList.add("highlight");
            } else {
                box.classList.remove("highlight");
            }
        }
    }
    // Attach the scroll event listener to highlight the active section
    window.addEventListener("scroll", highlightActiveSection);

    // Initial call to highlight the active section on page load
    highlightActiveSection();
});
