document.addEventListener("DOMContentLoaded", function () {

    // ===== DOM ELEMENTS =====
    const menuContainer = document.getElementById("menuContainer");
    const toggleBtn = document.getElementById("themeToggle");
    const branchSelect = document.getElementById("branchSelect");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // ===== MENU DATA WITH BRANCH SPECIFIC =====
    const menuData = {
        madhav: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces crispy golgappe", rating: 4.5 },
                    { name: "Suji Golgappe", price: 30, desc: "7 pieces special suji golgappe", rating: 4.7 },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces no onion garlic", rating: 4.8 }
                ]
            },
            {
                category: "Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 40, desc: "Crispy papdi with chutney", rating: 4.6 },
                    { name: "Butter Papdi Chaat", price: 50, desc: "Butter loaded papdi", rating: 4.8 },
                    { name: "Dahi Papdi Chaat", price: 70, desc: "Dahi special papdi", rating: 4.9 }
                ]
            },
            {
                category: "Karela Chaat",
                items: [
                    { name: "Karela Chaat", price: 40, desc: "Unique karela chaat", rating: 4.5 },
                    { name: "Paneer Karela Chaat", price: 50, desc: "Paneer karela fusion", rating: 4.7 }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Cheela", price: 60, desc: "Classic butter cheela", rating: 4.6 },
                    { name: "Butter Paneer Vegetable Cheela", price: 70, desc: "Paneer + veg loaded", rating: 4.8 },
                    { name: "Butter Paneer Jain Cheela", price: 70, desc: "Jain style cheela", rating: 4.7 },
                    { name: "Butter Paneer Cheese Mushroom Cheela", price: 80, desc: "Loaded mushroom cheese", rating: 4.9 },
                    { name: "Butter Paneer Tomato Onion Cheela", price: 80, desc: "Tomato onion masala", rating: 4.6 },
                    { name: "Butter Cheese Cheela", price: 70, desc: "Cheese stuffed cheela", rating: 4.7 },
                    { name: "Paneer Baby Corn Cheela", price: 90, desc: "Paneer + baby corn special", rating: 4.8 },
                    { name: "Paneer Mushroom Masala Cheela", price: 90, desc: "Spicy mushroom masala", rating: 4.9 },
                    { name: "Pasta Paneer Cheela", price: 90, desc: "Fusion style cheela", rating: 4.7 },
                    { name: "Sweet Corn Masala Cheela", price: 90, desc: "Corn masala filling", rating: 4.6 },
                    { name: "Hemu Ji Special Cheela", price: 100, desc: "Chef special premium cheela", rating: 5.0 }
                ]
            },
            {
                category: "Sev Puri",
                items: [
                    { name: "Suji Sev Puri", price: 40, desc: "6 pieces", rating: 4.5 },
                    { name: "Aata Sev Puri", price: 45, desc: "Healthy aata version", rating: 4.6 },
                    { name: "Butter Sev Puri", price: 50, desc: "Butter loaded", rating: 4.7 },
                    { name: "Paneer Sev Puri", price: 50, desc: "Paneer topping", rating: 4.8 }
                ]
            }
        ],
        nai: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 35, desc: "7 pieces crispy golgappe", rating: 4.6 },
                    { name: "Suji Golgappe", price: 35, desc: "7 pieces special suji golgappe", rating: 4.8 },
                    { name: "Jain Golgappe", price: 45, desc: "7 pieces no onion garlic", rating: 4.9 }
                ]
            },
            {
                category: "Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 45, desc: "Crispy papdi with chutney", rating: 4.7 },
                    { name: "Butter Papdi Chaat", price: 55, desc: "Butter loaded papdi", rating: 4.9 },
                    { name: "Dahi Papdi Chaat", price: 75, desc: "Dahi special papdi", rating: 5.0 }
                ]
            },
            {
                category: "Karela Chaat",
                items: [
                    { name: "Karela Chaat", price: 45, desc: "Unique karela chaat", rating: 4.6 },
                    { name: "Paneer Karela Chaat", price: 55, desc: "Paneer karela fusion", rating: 4.8 }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Cheela", price: 65, desc: "Classic butter cheela", rating: 4.7 },
                    { name: "Butter Paneer Vegetable Cheela", price: 75, desc: "Paneer + veg loaded", rating: 4.9 },
                    { name: "Butter Paneer Jain Cheela", price: 75, desc: "Jain style cheela", rating: 4.8 },
                    { name: "Butter Paneer Cheese Mushroom Cheela", price: 85, desc: "Loaded mushroom cheese", rating: 5.0 },
                    { name: "Butter Paneer Tomato Onion Cheela", price: 85, desc: "Tomato onion masala", rating: 4.7 },
                    { name: "Butter Cheese Cheela", price: 75, desc: "Cheese stuffed cheela", rating: 4.8 },
                    { name: "Paneer Baby Corn Cheela", price: 95, desc: "Paneer + baby corn special", rating: 4.9 },
                    { name: "Paneer Mushroom Masala Cheela", price: 95, desc: "Spicy mushroom masala", rating: 5.0 },
                    { name: "Pasta Paneer Cheela", price: 95, desc: "Fusion style cheela", rating: 4.8 },
                    { name: "Sweet Corn Masala Cheela", price: 95, desc: "Corn masala filling", rating: 4.7 },
                    { name: "Hemu Ji Special Cheela", price: 110, desc: "Chef special premium cheela", rating: 5.0 }
                ]
            },
            {
                category: "Sev Puri",
                items: [
                    { name: "Suji Sev Puri", price: 45, desc: "6 pieces", rating: 4.6 },
                    { name: "Aata Sev Puri", price: 50, desc: "Healthy aata version", rating: 4.7 },
                    { name: "Butter Sev Puri", price: 55, desc: "Butter loaded", rating: 4.8 },
                    { name: "Paneer Sev Puri", price: 55, desc: "Paneer topping", rating: 4.9 }
                ]
            }
        ]
    };

    // ===== CURRENT STATE =====
    let currentBranch = "madhav";
    let currentCategory = "all";
    let searchQuery = "";

    // ===== LOAD MENU =====
    function loadMenu() {
        if (!menuContainer) {
            console.error("menuContainer not found in HTML");
            return;
        }

        menuContainer.innerHTML = "";
        const branchMenu = menuData[currentBranch] || menuData["madhav"];

        branchMenu.forEach(section => {
            // Filter items based on category and search
            const filteredItems = section.items.filter(item => {
                const matchesCategory = currentCategory === "all" || item.category === currentCategory;
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                     item.desc.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            // Only show category if there are items
            if (filteredItems.length > 0) {
                const categoryTitle = document.createElement("h2");
                categoryTitle.innerText = section.category;
                categoryTitle.classList.add("category-title");
                menuContainer.appendChild(categoryTitle);

                filteredItems.forEach(item => {
                    const card = createMenuItemCard(item);
                    menuContainer.appendChild(card);
                });
            }
        });

        // Show message if no items found
        if (menuContainer.innerHTML.trim() === "") {
            menuContainer.innerHTML = `
                <div style="text-align: center; padding: 50px; grid-column: 1 / -1;">
                    <h3>😕 No items found</h3>
                    <p>Try changing search or filter</p>
                </div>
            `;
        }
    }

    // ===== CREATE MENU CARD =====
    function createMenuItemCard(item) {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        // Generate star rating
        const stars = "⭐".repeat(Math.floor(item.rating)) + "☆".repeat(5 - Math.floor(item.rating));

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">₹ ${item.price}</p>
            <p class="desc">${item.desc}</p>
            <div class="rating">${stars} ${item.rating}</div>
        `;

        card.addEventListener("click", function () {
            showDetails(item);
        });

        return card;
    }

    // ===== MODAL =====
    function showDetails(item) {
        const modal = document.createElement("div");
        modal.classList.add("modal");

        const stars = "⭐".repeat(Math.floor(item.rating)) + "☆".repeat(5 - Math.floor(item.rating));

        modal.innerHTML = `
            <div class="modal-content">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
                <div class="rating">${stars} ${item.rating}</div>
                <h3>Price: ₹ ${item.price}</h3>
                <div class="modal-buttons">
                    <button id="closeBtn">Close</button>
                    <button id="orderBtn">Order Now</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close button
        document.getElementById("closeBtn").addEventListener("click", function () {
            modal.remove();
        });

        // Order button
        document.getElementById("orderBtn").addEventListener("click", function () {
            orderOnWhatsApp(item);
            modal.remove();
        });

        // Close on outside click
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // ===== ORDER ON WHATSAPP =====
    function orderOnWhatsApp(item = null) {
        const phoneNumber = "919876543210";
        let message = "Hello Hemu Ji Chilla Chat! I want to order: ";

        if (item) {
            message += `${item.name} (₹${item.price})`;
        } else {
            message += "Please share your menu";
        }

        message += `%0A%0ABranch: ${branchSelect.value === 'madhav' ? 'Madhav Ganj' : 'Nai Sadak'}`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }

    // ===== THEME TOGGLE =====
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            toggleBtn.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });

        // Load saved theme
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            toggleBtn.textContent = "☀️";
        }
    }

    // ===== BRANCH SELECT =====
    if (branchSelect) {
        branchSelect.addEventListener("change", function () {
            currentBranch = this.value;
            loadMenu();
        });
    }

    // ===== SEARCH FUNCTIONALITY =====
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            searchQuery = this.value;
            loadMenu();
        });
    }

    // ===== CATEGORY FILTER =====
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove("active"));
                // Add active class to clicked button
                this.classList.add("active");
                // Update current category
                currentCategory = this.dataset.category;
                // Reload menu
                loadMenu();
            });
        });
    }

    // ===== INITIAL LOAD =====
    loadMenu();

    // ===== PERFORMANCE: Event Delegation for Modals =====
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("menu-card")) {
            const item = {
                name: e.target.querySelector("h3").innerText,
                price: parseInt(e.target.querySelector(".price").innerText.replace("₹", "")),
                desc: e.target.querySelector(".desc")?.innerText || "Delicious item",
                rating: 4.5
            };
            showDetails(item);
        }
    });

    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const modal = document.querySelector(".modal");
            if (modal) {
                modal.remove();
            }
        }
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ===== ANIMATION ON SCROLL =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".menu-card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease";
        observer.observe(card);
    });

});
