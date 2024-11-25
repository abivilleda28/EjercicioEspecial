// crear un boton
// const button = document.querySelector("button");
// button.addEventListener("click", function(){
//  console.log("¡Se hizo clic en el botón!");
// });

document.addEventListener("DOMContentLoaded", () => {
    const loadProductsButton = document.getElementById("load-products");
    const productContainer = document.getElementById("product-container");

    loadProductsButton.addEventListener("click", async()=>{
        const respuesta = await fetch (https://fakestoreapi.com/products);
    })
    if (button) {
      button.addEventListener("load-products", () => {
        console.log("¡Load products!");
      });
    }
  });
  