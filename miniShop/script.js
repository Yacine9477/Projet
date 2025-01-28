

let total = 0;

const listProduct = document.querySelector("ul");

fetch('https://fakestoreapi.com/products?limit=30')
.then((response) => {
    return response.json();
})
.then((products) => {

    console.log(products);

    for(const product of products) {
        const productInfo = document.createElement("li");

        // création d'un conteneur pour les infos du produits
        const productContainer = document.createElement("div");

    
        const productTitle = document.createElement("h2");
        productTitle.innerText = product.title;
        productContainer.appendChild(productTitle);

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productContainer.appendChild(productImg);

        const productPrice = document.createElement("p");
        productPrice.innerText = `Price: ${product.price}$`;
        productContainer.appendChild(productPrice);


        const productDescription = document.createElement("p");
        productDescription.classList.add("description");
        productDescription.innerText = product.description;
        productContainer.appendChild(productDescription);



        const btnProduct = document.createElement("button");
        btnProduct.innerText = "acheter";

        btnProduct.addEventListener("click", () => {
            
        })

        productContainer.appendChild(btnProduct);




        productInfo.appendChild(productContainer);
        listProduct.appendChild(productInfo);
    }
});



