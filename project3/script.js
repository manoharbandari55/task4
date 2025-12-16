
const products = [
  { 
    name: "Smartphone", 
    category: "electronics", 
    price: 500, rating: 4.5, 
    img: "image_1.png"
   },
  {
     name: "Laptop",
      category: "electronics", 
      price: 900, 
      rating: 4.8, 
      img: "image_2.png" 
    },
  { 
    name: "Headphones",
     category: "electronics", 
     price: 120, rating: 4.2,
     img: "image_3.png"
     },
  { 
     name: "Smart Watch",
     category: "electronics",
     price: 220, 
     rating: 4.4, 
     img: "image_4.png" 
    },

  { 
    name: "T-Shirt", 
    category: "fashion", 
    price: 25, 
    rating: 4.0, 
    img: "image_5.png" 
  },
  { 
    name: "Sneakers", 
    category: "fashion", 
    price: 80, 
    rating: 4.6, 
    img: "image_6.png" 
  },
  { 
    name: "Jacket", 
    category: "fashion", 
    price: 150, 
    rating: 4.4, 
    img: "image_7.png" 
  },

  { 
    name: "Sunglasses", 
    category: "accessories", 
    price: 60, 
    rating: 4.1, 
    img: "image_8.png" 
  },
  { 
    name: "Backpack", 
    category: "accessories", 
    price: 70, 
    rating: 4.3, 
    img: "image_9.png" 
  }
];

let cartCount = 0;

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");
const searchInput = document.getElementById("searchInput");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const cartCountEl = document.getElementById("cartCount");
const darkToggle = document.getElementById("darkToggle");

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p class="price">$${p.price}</p>
      <p>⭐ ${p.rating}</p>
      <button>Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      cartCount++;
      cartCountEl.textContent = cartCount;
    });

    productList.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];

  const search = searchInput.value.toLowerCase();
  filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  filtered = filtered.filter(p => p.price <= priceRange.value);

  if (sortOption.value === "priceLow") 
    {
    filtered.sort((a,b) => a.price - b.price);
  } 
  else if (sortOption.value === "priceHigh")
     {
    filtered.sort((a,b) => b.price - a.price);
  } 
  else if (sortOption.value === "rating") 
    {
    filtered.sort((a,b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  applyFilters();
});

categoryFilter.addEventListener("change", applyFilters);
sortOption.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderProducts(products);
