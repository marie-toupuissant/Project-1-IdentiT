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

    // DropDownMenu

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
 // Manipulation DOM section Producers group

    const dataProducerInfo = [
        { 
            image: "assets/images/Briac_Rousseau.png",
            title: "Briac Rousseau",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        },
        { 
            image: "assets/images/Guillaume-Miche.png",
            title: "Guillaume Miche",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        },
        { 
            image: "assets/images/Marie-Toupuissant.png",
            title: "Marie Toupuissant",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        },
        { 
            image: "assets/images/Stephanie-Caussier.png",
            title: "Stéphanie Caussier",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        }
    ];
    
    console.log(dataProducerInfo);
    
    dataProducerInfo.forEach(aboutProducer => {
        console.log(aboutProducer);
    
        const producerCard = document.createElement("section");
        producerCard.classList.add('about-producerCard');
        producerCard.innerHTML = `
        <img src =${aboutProducer.image} alt="picture Briac Rousseau"> 
        <h2>${aboutProducer.title}</h2>
        <p> ${aboutProducer.content}</p>`
        document.querySelector(".aboutProducersInfo").appendChild(producerCard);
    });

