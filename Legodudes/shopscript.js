console.log(products);
// gffugkjhkjnnkjjgygykg7gihuiuuhihihhhhihuihlmøjøoøliuuigyugiytfyugu  hhguy hi //

let productHTML = ""
products.map((product, index) => productHTML += `
            <article 
                class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr.${product.price},-</p>
                <button onclick = "addProductToCart(${product.prodid})">Legg i handlekurv</button>
            </article>` );

document.getElementById("productlist").innerHTML = productHTML;
document.getElementById("shoppingcart").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("visible");
})

function addProductToCart(prodid) {
    console.log("Du vil legge til produktid" + prodid);

    const idExist = cart.some(cartprod => cartprod.prodid === prodid);
    if (idExist){
        const index = cart.findIndex(p => p.cartProdid = prodid);
        cart[index].quantity++;
    } 
    else {
        cart.push({cartProdid: prodid, quantity: 1});
    }

    console.log(cart);
}

function printCart(){
    let cartHTML ="";
    cart.map((cartprod, index) => {
        const currentProduct = products.findIndex(p => p.prodid === cartprod.cartProdid);
        const currentProductInfo = products[currentProduct];
        cartHTML += `<article class="cart-product">
                    <span class="title">${currentProductInfo.title}</span>
                    <span class="price">${currentProductInfo.price},-</span>
                    <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                    <button class="delete">x</button>
                </article>`;
        
        cartTotal += currentProductInfo.price * cartprod.quantity;
        cartNumber += cartprod.quantity; 
    })

    document.getElementById("cart-products").innerHTML = cartHTML;
    document.getElementById("cart-total").innerHTML = cartTotal;
    document.getElementById("cartcount").innerHTML = cartNumber;
}

