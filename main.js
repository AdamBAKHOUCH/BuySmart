// Example products
const products = [
    {
        id: 1,
        name: 'Gofrette',
        description: 'Makes you feel the Chocolate how it be tasted',
        price: 1.99,
        category: 'PC Gamer',
        images: [
            'https://courses.monoprix.tn/lamarsa/128560-large_default/gaufrette.jpg',
            'https://www.geantdrive.tn/azur-city/1105299-large_default/gaufrettes.jpg',
            'https://snack.tn/wp-content/uploads/2019/04/Tom-gaufrettes-fraise.png',
            'https://courses.monoprix.tn/carthage/127221-large_default/gaufrettes.jpg',
            'https://aziza.tn/media/catalog/product/cache/c204ca5e5361ca3d6439babf44af8e05/1/0/100184531_083f.jpg',
            'https://snack.tn/wp-content/uploads/2019/04/Saida-gaufrettes-go%C3%BBt-vanille-340x340.png',
            'https://snack.tn/wp-content/uploads/2019/04/Tom-gaufrettes-vanille.png'
        ],
    },
    {
        id: 2,
        name: 'Papillon',
        description: 'Feel the taste of Sugar ',
        price: 3.99,
        category: 'Chamia',
        images: [
            'https://courses.monoprix.tn/carthage/127054-large_default/chamia.jpg',
            'https://mounetlebled.com/wp-content/uploads/2023/03/chamia-aux-pistaches-la-gazelle-400g-mounet-lebled-e1678643118849.jpg',
            'https://tunisie-prix.com/images/produits/1200/6194036802272.jpg',
            'https://ayshek.com/wp-content/uploads/2020/05/cd0885_58f8a72f1ccf43bc8b1597e956af443bmv2.jpg',
            'https://courses.monoprix.tn/lac/127044-home_default/chamia.jpg',
            'https://courses.monoprix.tn/lac/127046-home_default/chamia.jpg',
            'https://courses.monoprix.tn/lac/128744-home_default/chamia.jpg'
        ],
    },
    {
        id: 3,
        name: 'Dinde',
        description: 'feel the taste of Dinde',
        price: 8.99,
        category: 'meat',
        images: [
            'https://chahia.com.tn/media/catalog/product/cache/1c801480f03e96a3ade5d6c30af35450/j/a/jambon_dinde_campagne_web.png',
            'https://chahia.com.tn/media/catalog/product/cache/48d7975c8c5b0314e97523704b83432b/j/a/jambon_dinde_l_ail_et_aux_fines_herbes_web.png',
            'https://www.geantdrive.tn/tunis-city/1270167-home_default/salami-de-dinde.jpg',
            'https://www.geantdrive.tn/tunis-city/1151471-large_default/chorizo.jpg', 
            'https://courses.monoprix.tn/carthage/155815-home_default/salami.jpg',
            'https://www.geantdrive.tn/tunis-city/1181563-home_default/salami-pur-de-boeuf-traditionnel.jpg',
            "https://www.qateur.com/wp-content/uploads/2023/05/salamiauxolives-1.png",
    
        ],
    },
    {
        id: 4,
        name: 'Club',
        description: 'experience the taste of chocolate',
        price: 1.99,
        category: 'chocolate',
        images: [
           
           
            'https://tunisie-prix.com/images/produits/1200/6194005461134.jpg',
            'https://photos1.blogger.com/blogger/2020/3137/1600/club%20choco.jpg', 
            'https://c8.alamy.com/comp/J3WR2A/mcvites-orange-chocolate-club-biscuit-J3WR2A.jpg',
            'https://www.sweetsandsnacksworld.com/wp-content/uploads/CLUB_revisedXrender_GoildXfoil.png',
            'https://www.millerfoodservice.co.uk/media/catalog/product/cache/e70602422d911f0edb0b0d50a9ac95bc/f/9/f980b255d6b5326de14f6ef2bbdbbe36.jpg',
            'https://www.millerfoodservice.co.uk/media/catalog/product/cache/e70602422d911f0edb0b0d50a9ac95bc/d/a/da68c0a7fc88fabdbf2ad1f3ab7aeaf0.jpg',
            
        ],
    },
    // Add more products as needed
    {
        id: 5,
        name: 'Chips-up',
        description: 'chips made of paprika',
        price: 2.99,
        category: 'chips',
        images: [
           
           
            'https://snack.tn/wp-content/uploads/2019/03/Chips-up-Paprika.png',
            'https://tunisie-prix.com/images/produits/1200/6191547200641.jpg', 
            "https://snack.tn/wp-content/uploads/2019/03/Chips-up-Cheese.png",
            "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/2724/1.jpg?9251",
            "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/2724/1.jpg?9341",
            "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/2724/1.jpg?8451",
            
        ],
    },
    {
        id: 6,
        name: 'zit zitoune',
        description: 'Feel the taste of Health',
        price: 9.99,
        category: 'zit',
        images: [
           
           
            'https://championgourmet.ma/wp-content/uploads/2021/08/WDS_0003-HSB_Produit_Oued-Souss_Huile-olive-1l.png',
            'https://www.aswakassalam.com/wp-content/uploads/2023/05/121095.jpg',    
        ],
    },
    {
        id: 7,
        name: 'Coréte Mallow',
        description: 'Cool stickers featuring your favorite gaming characters and logos.',
        price: 9.99,
        category: 'mloukhia',
        images: [
           
           
            'https://i.etsystatic.com/23555791/r/il/2b41fd/4368703128/il_1080xN.4368703128_frvm.jpg',
            'https://www.alepmarket.fr/5247-full_default/molokheya-vegetable-corte-durra-200g.jpg', 
            "https://i0.wp.com/miranshop.de/wp-content/uploads/2023/03/%D9%85%D9%84%D9%88%D8%AE%D9%8A%D8%A9-%D9%88%D8%B1%D9%82-1.jpg?fit=1000%2C1000&ssl=1",
            
        ],
    },
    {
        id: 8,
        name: 'Sorgho Naturel',
        description: 'best product of the year',
        price: 4.99,
        category: 'droo',
        images: [
           
           
            'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/0834/1.jpg?4505',
            'https://ayshek.com/wp-content/uploads/2021/01/sorgho-nature-bgh-500g-2.jpg', 
            "https://lacoopalimentaire.ca/wp-content/uploads/2020/04/bgh-sorgho-naturel-500gr.png",
            
        ],
    },
    {
        id: 9,
        name: 'carrot Jam',
        description: 'be the one to taste the best taste of carrots',
        price: 3.99,
        category: 'carrot',
        images: [
           
           
            'https://www.bazarche.co.uk/cdn/shop/products/102JCA.jpg?v=1643580964',
            'https://www.bazarche.co.uk/cdn/shop/products/101JQ.jpg?v=1643581089', 
            "https://www.bazarche.co.uk/cdn/shop/products/103A.jpg?v=1643581008",
            
          
            
        ],
    },
    {
        id: 10,
        name: 'chocoTom',
        description: 'The populat taste of choclate and fun',
        price: 3.99,
        category: 'biscuit',
        images: [
           
           
            'https://snack.tn/wp-content/uploads/2019/04/Chocotom-Vanille-900x845.png',
            'https://mintounes.com/60-large_default/biscuit-fourre-tom-190gr-fraise-pack-de-3-.jpg', 
            "https://boulangerielapaix.com/wp-content/uploads/2020/11/10.jpg",
            
           
                        
        ],
    },
    {
        id: 11,
        name: 'Leibniz',
        description: 'best choice of biscuits',
        price: 9.99,
        category: 'bscuit',
        images: [
           
           
            'https://down-my.img.susercontent.com/file/cfee344af3ce08bdab8d495e43f33ce0',
            
            
            
            
        ],
    },
    {
        id: 12,
        name: 'Oppa',
        description: 'Cool stickers featuring your favorite gaming characters and logos.',
        price: 9.99,
        category: 'chocolate',
        images: [
           
           
            'https://www.geantdrive.tn/tunis-city/1149012-home_default/poudre-instantannee-chocolat.jpg',
            'https://www.geantdrive.tn/tunis-city/1152904-home_default/poudre-instantanee-chocolat.jpg', 
            "https://www.geantdrive.tn/tunis-city/1143206-home_default/poudre-instantanee.jpg",
            
            
        ],
    },
];

// Display products
$(document).ready(function () {
    $('[class^="like-counter"]').text('0');
    const productContainer = $('#product-container');

    products.forEach(product => {
        displayProduct(product);
    });

    // Handle left arrow click event
    $('#product-container').on('click', '.left-arrow', function () {
        updateImageArrow($(this).closest('.product'), 'left');
    });

    // Handle right arrow click event
    $('#product-container').on('click', '.right-arrow', function () {
        updateImageArrow($(this).closest('.product'), 'right');
    });
});

// Display product function
function displayProduct(product) {
    const productContainer = $('#product-container');
    const productHtml = `<div class="product" id="product-${product.id}">
                            <img src="${product.images[0]}" alt="${product.name}">
                            <div class="product-info">
                                <h3>${product.name}</h3>
                                <p class="product-description">${product.description}</p>
                                <p class="product-price">$${product.price}</p>
                                <div class="button-container">
                                    <button class="buy-button">Buy Now</button>
                                    <button class="add-button" onclick="addProductToCart(${product.id})">Add to Cart</button>
                                </div>
                                <div class="like-container">
                                    <button class="like-button" onclick="likeProduct(${product.id})">Like</button>
                                    <span class="like-counter" id="like-counter-${product.id}">0</span>
                                </div>
                            </div>
                            <div class="arrow-container">
                                <button class="arrow-button left-arrow">Previous</button>
                                <button class="arrow-button right-arrow">Next</button>
                            </div>
                        </div>`;
    productContainer.append(productHtml);
}
// Function to handle liking a product
function likeProduct(productId) {
    const likeCounter = $(`#like-counter-${productId}`);
    let currentLikes = parseInt(likeCounter.text());
    currentLikes++;
    likeCounter.text(currentLikes);
}


// Function to add product to cart (replace this with your actual logic)
function addProductToCart(productId) {
    alert(`Added product with ID ${productId} to cart`);
}

// Update image on arrow click
function updateImageArrow(productElement, direction) {
    const productId = productElement.attr('id').split('-')[1];
    const product = getProductById(productId);
    const currentImageIndex = productElement.find('img').attr('src');
    const currentIndex = product.images.indexOf(currentImageIndex);

    let nextIndex;
    if (direction === 'left') {
        nextIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    } else {
        nextIndex = (currentIndex + 1) % product.images.length;
    }

    productElement.find('img').attr('src', product.images[nextIndex]);
}

// Helper function to get product by ID
function getProductById(id) {
    return products.find(product => product.id == id);
}
