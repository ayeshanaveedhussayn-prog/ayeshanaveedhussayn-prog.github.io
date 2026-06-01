const products = [
    {
        name: "Wireless Earbuds",
        image: "images/earbuds.jpg",
        price: "Under $50",
        bestFor: "Music, calls, and commuting",
        features: [
            "Clear balanced sound",
            "Compact charging case",
            "Good battery backup"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Wireless Headphones",
        image: "images/headphones.jpg",
        price: "Under $80",
        bestFor: "Long listening and office work",
        features: [
            "Comfortable over ear design",
            "Strong bass",
            "Noise isolation"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Handsfree",
        image: "images/handsfree.jpg",
        price: "Under $30",
        bestFor: "Calls and casual listening",
        features: [
            "Clear microphone",
            "Lightweight build",
            "Easy to carry"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Bluetooth Speaker",
        image: "images/speaker.jpg",
        price: "Under $60",
        bestFor: "Home and outdoor use",
        features: [
            "Loud sound output",
            "Portable size",
            "Good battery life"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Smart Watch",
        image: "images/watch.jpg",
        price: "Under $70",
        bestFor: "Fitness and notifications",
        features: [
            "Step tracking",
            "Heart rate monitoring",
            "Phone alerts"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Power Bank",
        image: "images/powerbank.jpg",
        price: "Under $40",
        bestFor: "Travel and daily backup",
        features: [
            "Fast charging",
            "Slim design",
            "Reliable power"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "USB C Hub",
        image: "images/hub.jpg",
        price: "Under $50",
        bestFor: "Laptop expansion",
        features: [
            "Multiple ports",
            "Plug and play",
            "Work friendly"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Wireless Mouse",
        image: "images/mouse.jpg",
        price: "Under $35",
        bestFor: "Office and daily work",
        features: [
            "Smooth tracking",
            "Comfortable grip",
            "Battery efficient"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Mechanical Keyboard",
        image: "images/keyboard.jpg",
        price: "Under $90",
        bestFor: "Typing and productivity",
        features: [
            "Responsive keys",
            "Solid build",
            "Compact layout"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    },
    {
        name: "Phone Stand",
        image: "images/stand.jpg",
        price: "Under $20",
        bestFor: "Desk and video calls",
        features: [
            "Adjustable angles",
            "Stable base",
            "Hands free use"
        ],
        link: "YOUR_AMAZON_AFFILIATE_LINK"
    }
];

const homeGrid = document.getElementById("homeProductGrid");

if (homeGrid) {
    products.slice(0, 4).forEach(product => {
        homeGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="price">${product.price}</div>
                    <div class="best-for">Best for: ${product.bestFor}</div>
                    <ul>
                        ${product.features.map(f => `<li>${f}</li>`).join("")}
                    </ul>
                    <a href="${product.link}" target="_blank" class="btn">
                        View on Amazon
                    </a>
                </div>
            </div>
        `;
    });
}

