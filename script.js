document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("menuContainer");
    const toggleBtn = document.getElementById("themeToggle");
    const branchSelect = document.getElementById("branchSelect");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    let currentBranch = "madhav";
    let currentCategory = "all";
    let searchQuery = "";

    // ===== FULL MENU DATA =====
    const menuData = {
        madhav: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces" },
                    { name: "Suji Golgappe", price: 30, desc: "7 pieces" },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces" },
                    { name: "Aata Suji Golgappe", price: 30, desc: "7 pieces" }
                ]
            },
            {
                category: "Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 40 },
                    { name: "Butter Sev Papdi", price: 50 },
                    { name: "Paneer Sev Papdi", price: 50 },
                    { name: "Dahi Papdi Chaat", price: 70 }
                ]
            },
            {
                category: "Karela Chaat",
                items: [
                    { name: "Karela Chaat", price: 40 },
                    { name: "Paneer Karela Chaat", price: 50 }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Paneer Cheela", price: 60 },
                    { name: "Butter Paneer Vegetable Cheela", price: 70 },
                    { name: "Butter Paneer Jain Cheela", price: 70 },
                    { name: "Butter Paneer Cheese Masala Cheela", price: 80 },
                    { name: "Butter Paneer Tomato Onion Cheela", price: 80 },
                    { name: "Butter Paper Cheela", price: 60 },
                    { name: "Butter Paper Baby Cheela", price: 70 },
                    { name: "Paneer Mushroom Masala Cheela", price: 90 },
                    { name: "Pasta Paneer Cheela", price: 90 },
                    { name: "Sweet Corn Masala Cheela", price: 90 },
                    { name: "Hemu Ji Special Cheela", price: 100 }
                ]
            },
            {
                category: "Sev Puri",
                items: [
                    { name: "Suji Sev Puri", price: 40 },
                    { name: "Aata Sev Puri", price: 40 },
                    { name: "Butter Sev Puri", price: 50 },
                    { name: "Paneer Sev Puri", price: 50 }
                ]
            },
            {
                category: "Pizza",
                items: [
                    { name: "Cheese Paneer Pizza", price: 150 },
                    { name: "Cheese Veg Pizza", price: 120 },
                    { name: "Tandoori Paneer Pizza", price: 150 },
                    { name: "Margherita Pizza", price: 130 }
                ]
            },
            {
                category: "Pasta",
                items: [
                    { name: "Red Sauce Pasta", price: 100 },
                    { name: "White Sauce Pasta", price: 100 },
                    { name: "Paneer Pasta", price: 140 }
                ]
            },
            {
                category: "Sandwiches",
                items: [
                    { name: "Veg Sandwich", price: 60 },
                    { name: "Cheese Sandwich", price: 80 },
                    { name: "Paneer Sandwich", price: 100 }
                ]
            },
            {
                category: "Burgers",
                items: [
                    { name: "Aloo Tikki Burger", price: 80 },
                    { name: "Cheese Burger", price: 100 }
                ]
            },
            {
                category: "Maggi",
                items: [
                    { name: "Regular Maggi", price: 40 },
                    { name: "Cheese Maggi", price: 60 }
                ]
            },
            {
                category: "Patties",
                items: [
                    { name: "Aloo Patties", price: 50 },
                    { name: "Cheese Patties", price: 70 }
                ]
            }
        ],
        nai: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 35 },
                    { name: "Jain Golgappe", price: 45 }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Paneer Cheela", price: 65 },
                    { name: "Hemu Ji Special Cheela", price: 110 }
                ]
            }
        ]
    };

    function loadMenu() {
        menuContainer.innerHTML = "";

        menuData[currentBranch].forEach(section => {
            // Logic: Show section ONLY if category is "all" OR it matches the clicked button
            const isCategoryMatch = currentCategory === "all" || section.category === currentCategory;
            
            if (!isCategoryMatch) return;

            // Search filter within that category
            const filteredItems = section.items.filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length === 0) return;

            // Create Category Heading
            const title = document.createElement("h2");
            title.classList.add("category-title");
            title.innerText = section.category;
            menuContainer.appendChild(title);

            // Create Cards (No Ratings)
            filteredItems.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("menu-card");
                card.innerHTML = `
                    <h3>${item.name}</h3>
                    <p class="price">₹ ${item.price}</p>
                    <p class="desc">${item.desc || ""}</p>
                `;
                card.onclick = () => showModal(item);
                menuContainer.appendChild(card);
            });
        });
    }

    // Modal Logic
    function showModal(item) {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${item.name}</h2>
                <p>${item.desc || "Serving authentic taste since 33+ years!"}</p>
                <h3 style="color: var(--primary-color)">Price: ₹ ${item.price}</h3>
                <button id="closeBtn" class="primary-btn" style="margin-top:20px">Close</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById("closeBtn").onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    }

    // Event Listeners
    branchSelect.onchange = (e) => {
        currentBranch = e.target.value;
        loadMenu();
    };

    searchInput.oninput = (e) => {
        searchQuery = e.target.value;
        loadMenu();
    };

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            loadMenu();
        };
    });

    toggleBtn.onclick = () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    };

    loadMenu();
});

// WhatsApp Function
function orderOnWhatsApp() {
    window.open("https://wa.me/919876543210?text=Hello%20Hemu%20Ji!%20I%20want%20to%20order...", "_blank");
}
