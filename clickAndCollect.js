/* declare an array called "shopContent" */
/* create 5 objects inside of that array */
/* adding 3 paramater to these objects */
/* then adding the content that you want in those parameters */

const shopContent = [ 
    {
        productPicture: "/assets/images/packshot-tea-1.jpg" ,
        productName: "Argentina tea" ,
        productPrice: "A partir de X €" ,
    },
    {
        productPicture: "/assets/images/packshot-tea-1.jpg" ,
        productName: "England tea" ,
        productPrice: "A partir de X €" ,
    },
    {
        productPicture: "/assets/images/packshot-tea-1.jpg" ,
        productName: "Japan tea" ,
        productPrice: "A partir de X €" ,
    },
    {
        productPicture: "/assets/images/packshot-tea-1.jpg" ,
        productName: "Morocco tea" ,
        productPrice: "A partir de X €" ,
    },
    {
        productPicture: "/assets/images/packshot-tea-1.jpg" ,
        productName: "South-africa tea" ,
        productPrice: "A partir de X €" ,
    },
]

/* just checking that the list is fine readed by the console */
console.log(shopContent)

shopContent.forEach(productContent => {

    /* checking that the foreach loop works fine with all array's objects */
    console.log(productContent);

    /* create a div called "card" */
    const card = document.createElement('div');
    
    /* add a class called "card" in the div "card" we just create */
    card.classList.add('card');

    /* add html inside the div called "card" */
    card.innerHtml = `
    <img class="clickAndCollect-packshot" src=${productContent.productPicture} alt="packshot-picture" >
    <h4 class="clickAndCollect-product-name">${productContent.productName}</h4>
    <p class="clickAndCollect-product-price">${productContent.productPrice}</p>`

    /* insert the div called "card" in the ".clickAndColelct-shop" class in my html file */
    document.querySelector(".clickAndCollect-shop").appendChild(card);
})






/* 
Countries list

Argentina
England
Japan
Morocco
South-africa
*/