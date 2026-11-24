
const products = [
    {
        name: "Women Floral Dress",
        brand: "Roadster",
        price: 799,
        category: "Women",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500"
    },
    {
        name: "Men Casual Shirt",
        brand: "HIGHLANDER",
        price: 999,
        category: "Men",
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=500"
    },
    {
        name: "Stylish Sneakers",
        brand: "Puma",
        price: 1499,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        name: "Women Handbag",
        brand: "Accessorize",
        price: 1199,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },
    {
        name: "Classic Sunglasses",
        brand: "Roadster",
        price: 599,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        name: "Men Casual Shoes",
        brand: "HRX",
        price: 1299,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        name: "Elegant Women's Top",
        brand: "Tokyo Talkies",
        price: 699,
        category: "Women",
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500"
    },
    {
        name: "Men Denim Jacket",
        brand: "Roadster",
        price: 1599,
        category: "Men",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    }
];

let bag = [];
let wishlist = [];

function displayProducts(items) {
    const grid = document.getElementById("productGrid");

    grid.innerHTML = items.map((product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}"
                 onerror="this.src='https://placehold.co/400x300?text=Fashion+Product'">
            <h3>${product.brand}</h3>
            <p>${product.name}</p>
            <p><strong>₹${product.price}</strong></p>
            <button onclick="addToBag('${product.name}')">
                Add to Bag
            </button>
            <button onclick="addToWishlist('${product.name}')">
                ♡ Wishlist
            </button>
        </div>
    `).join("");
}

function addToBag(name) {
    bag.push(name);
    alert(name + " added to your bag!");
    updateBag();
}

 
function addToWishlist(name) {
    if (!wishlist.includes(name)) {
        wishlist.push(name);
        document.getElementById("wishlistCount").textContent =
            wishlist.length;
        alert(name + " added to your wishlist!");
    } else {
        alert("This product is already in your wishlist.");
    }
}


function showBag() {
    if (bag.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let total = 0;

    let details = bag.map((name, index) => {
        const product = products.find(p => p.name === name);
        total += product.price;
        return (index + 1) + ". " + name + " - ₹" + product.price;
    });

    alert(
        "MY SHOPPING BAG\n\n" +
        details.join("\n") +
        "\n\nTotal Amount: ₹" + total
    );
}

function showWishlist() {
    if (wishlist.length === 0) {
        alert("Your wishlist is empty!");
        return;
    }

    alert("MY WISHLIST\n\n" + wishlist.join("\n"));
}

function updateBag() {
    document.getElementById("bagCount").textContent = bag.length;
}

 

function searchProducts() {
    const query = document.getElementById("searchInput")
        .value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    displayProducts(filtered);
}

displayProducts(products);



function filterCategory(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(product =>
            product.category === category
        );

        displayProducts(filtered);
    }

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
