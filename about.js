// alert("coucou");
const btnBurger = document.querySelector(".container");

btnBurger.forEach(btn => {
    btn.addEventListener("click",()=>{
        console.log("hello");
        btn.classList.toggle("active");
    })

} );