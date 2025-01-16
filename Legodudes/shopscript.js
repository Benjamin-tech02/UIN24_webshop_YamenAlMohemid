console.log(products)
// gffugkjhkjnnkjjgygykg7gihuiuuhihihhhhihuihlmøjøoøliuuigyugiytfyugu  hhguy hi //

let productHTML = ""
products.map((product, index) => productHTML += `
            <article 
                class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr.${product.price},-</p>
                <button>Legg i handlekurv</button>
            </article>` )

document.getElementById("productlist").innerHTML = productHTML

