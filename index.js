// Select the div element



// Add a scroll event listener
window.addEventListener("scroll", () => {

    // Check if the user has scrolled down (e.g., scroll down by 100 pixels)
    if (window.scrollY > 100) {
        // Add the "scrolled" class to change the background color
        
        colorChangeDiv.classList.add("fixed-top");
        // img.replaceWith(elemantCreated)
        
        // colorChangeDiv.classList.add("fixed-top");
       
    } else {
        // Remove the "scrolled" class when scrolling back to the top
        // brand.classList.add("brandShow");
        colorChangeDiv.classList.add("bg-light");
    }
});