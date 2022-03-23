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
    // Manipulation DOM section Producers group
    // dataProducersGroup.forEach(aboutProducersGroup =>{
    //     console.log(aboutProducersGroup);
    //     const producersGroup = document.createElement("section");
    //     producersGroup.classList.add('aboutProducersGroup');
    //     producersGroup.innerHTLM = `   
    //     <h1> ${aboutProducersGroup.title} </h1>
    //     <p> ${aboutProducersGroup.description} </p>`
    //     document.querySelector(".aboutProducersGroup").appendChild(producersGroup);
    // });

    const dataProducerInfo = [
        { 
            image: "assets/images/about-picture.png",
            title: "Briac Rousseau",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        },
        { 
            image: "assets/images/about-picture.png",
            title: "Guillaume Miche",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        },
        { 
            image: "assets/images/about-picture.png",
            title: "Marie Toupuissant",
            content:" “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas.” ",
        },
        { 
            image: "assets/images/about-picture.png",
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

//     const dataFooter = [
//         {
//         image:"assets/images/footer-logo-light.svg",
//         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor mauris volutpat lacus nec mauris, egestas."
//     }
// ];
//     dataFooterContent.forEach(footerCard =>{
//         const footerCard = document.createElement("div");
//         footerCard.classList.add("footer-logo");
//         footerCard.innerHTML = 
//         ` <img src = ${footerCard.image} alt="footer logo">
//         <p> ${footerCard.content}</p>`
//         document.querySelector(".footer-container").appendChild(footerCard);
//     })