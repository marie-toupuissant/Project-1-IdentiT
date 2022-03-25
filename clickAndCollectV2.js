//Animation burger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

    // DropDownMenu button pays

    function dropDownMenu() {
    
        const countryDropDownMenu = document.getElementById("countryDropDownMenu");
        if(countryDropDownMenu.style.display === "flex"){
            countryDropDownMenu.style.display = "none";
        
        }
        else{countryDropDownMenu.style.display = "flex";
            countryDropDownMenu.style.flexDirection = "column";
            countryDropDownMenu.style.color="#f0ece9";
        }
    };