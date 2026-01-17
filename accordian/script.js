   const accordions = document.querySelectorAll(".accordian");
    
    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active");
        });
    });