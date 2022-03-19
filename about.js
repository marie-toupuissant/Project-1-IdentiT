// alert("coucou");
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
            title: "Briac Rousseau" ,
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
    