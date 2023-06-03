// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
            id: 1,
            name: 'Half Fold',
            price: 230,
            type: 'grocery',
            offer: {
                number: 3,
                percent: 20
            },
            imageUrl: './images/HFolds.webp',
        },
        {
            id: 2,
            name: 'Mosaic Color',
            price: 350,
            type: 'grocery',
            imageUrl: './images/Mosaic.webp',

        },
        {
            id: 3,
            name: 'Earth Grain',
            price: 250,
            type: 'grocery',
            offer: {
                number: 10,
                percent: 30
            },
            imageUrl: './images/Grain.webp',

        },
        {
            id: 4,
            name: 'Folds',
            price: 300,
            type: 'beauty',
            imageUrl: './images/Folds.webp',

        },
        {
            id: 5,
            name: 'Pearl',
            price: 260,
            type: 'beauty',
            imageUrl: './images/Pearl.webp',

        },
        {
            id: 6,
            name: 'Earth',
            price: 220,
            type: 'beauty',
            imageUrl: './images/Earth.webp',

        },
        {
            id: 7,
            name: 'Torus',
            price: 370,
            type: 'clothes',
            imageUrl: './images/Torus.webp',

        },
        {
            id: 8,
            name: 'Lawn-Chiffon Combo',
            price: 260,
            type: 'clothes'
        },
        {
            id: 9,
            name: 'Toddler Frock',
            price: 480,
            type: 'clothes'
        },
        {
            id: 10,
            name: 'Toddler Frock',
            price: 9.99,
            type: 'clothes'
        },
        {
            id: 11,
            name: 'Toddler Frock',
            price: 9.99,
            type: 'clothes'
        },
        {
            id: 12,
            name: 'Toddler Frock',
            price: 9.99,
            type: 'clothes'
        }
    ]
    // Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart

    let productToAdd = products.find(prod => prod.id === id);
    // 2. Add found product to the cartList array
    cartList.push(productToAdd);

}

// Exercise 2
function cleanCart() {

    cartList.length = 0;
    cart.length = 0;
    calculateTotal();

    printCart();

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    total = 0;
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }

    // cartList.forEach((product) => {
    //     total += cartList[i].price;
    // });
    // console.log(total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cartList.forEach((product) => {
        if (!cart.includes(product)) {
            product.quantity = 1;
            cart.push(product);
        } else {
            product.quantity += 1;
        }
    })
    applyPromotionsCart();
    printCart();

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    let totalPrice = 0;
    cart.forEach((product) => {

        if (product.id == 1 && product.quantity >= 3) {
            product.price = 200;
        } else if (product.id == 3 && product.quantity >= 2) {
            // product.price -= (2 / 3);
            product.price -= 50;

        }

        product.subtotalWithDiscount = (product.quantity * product.price);
        totalPrice += product.subtotalWithDiscount;

    })
    return totalPrice;


}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let table = "";

    cart.forEach((product) => {
        // document.createElement("tbody");
        // for (let i = 0; i < 4; i++) {
        table += `<tr>
                <th><img src="${product.imageUrl}" alt="${product.name}" width="150" height="150"></th>
                <th>${product.name}</th>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.subtotalWithDiscount}</td>
                <td><a id="${product.id}" onclick="removeFromCart(${product.id})"><i class="fas fa-trash"></i></a></td>

                </tr>`;

    });
    document.getElementById("cart_list").innerHTML = table;

    document.getElementById("total_price").innerHTML = applyPromotionsCart();

};


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart

    let productToAdd = products.find(prod => prod.id === id);

    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let count = 0;

    let existingProduct = cart.find(product => product.id === productToAdd.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productToAdd.quantity = 1;
        cart.push(productToAdd);
    }

    cart.forEach((prod) => {
        count += prod.quantity;
    })

    document.getElementById('count_product').innerHTML = count;
    applyPromotionsCart();

}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    let count = 0;

    console.log(cart.length);

    let product = cart.find(product => product.id === id);
    if (product.quantity == 1) {
        cart = cart.filter(product => product.id !== id);
    } else if (product.id == 1 && product.quantity <= 3) {
        product.price = 230;
        product.quantity -= 1;
    } else if (product.id == 3 && product.quantity <= 10) {
        // product.price -= (2 / 3);
        product.price -= 50;

        product.quantity -= 1;
    } else if (product.quantity > 1) {
        product.quantity -= 1;
        count -= 1;
    }

    cart.forEach((prod) => {
        count += prod.quantity;
    })

    document.getElementById('count_product').innerHTML = count;
    applyPromotionsCart();
    printCart();


}

function open_modal() {
    console.log("Open Modal");
    printCart();
}