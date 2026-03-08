document.addEventListener("DOMContentLoaded", function () {

    // ===== DOM ELEMENTS =====
    const menuContainer = document.getElementById("menuContainer");
    const toggleBtn = document.getElementById("themeToggle");
    const branchSelect = document.getElementById("branchSelect");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // ===== BRANCH PHONE NUMBERS =====
    const branchPhones = {
        madhav: "919876543210",
        nai: "919876543211"
    };

    // ===== BRANCH SPECIFIC MENU DATA =====
    const menuData = {
        madhav: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces per plate" },
                    { name: "Suji Golgappe", price: 30, desc: "7 pieces per plate" },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces per plate" },
                    { name: "Aata Suji Golgappe", price: 30, desc: "7 pieces per plate" }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Paneer Cheela", price: 60, desc: "Per plate" },
                    { name: "Butter Paneer Vegetable Cheela", price: 70, desc: "Per plate" },
                    { name: "Butter Paneer Jain Cheela", price: 70, desc: "Per plate" },
                    { name: "Butter Paneer Cheese Masala Cheela", price: 80, desc: "Per plate" },
                    { name: "Butter Paneer Tomato Onion Cheela", price: 80, desc: "Per plate" },
                    { name: "Butter Paper Cheela", price: 60, desc: "Per plate" },
                    { name: "Butter Paneer Baby Cheela", price: 70, desc: "Per plate" },
                    { name: "Paneer Mushroom Masala Cheela", price: 90, desc: "Per plate" },
                    { name: "Pasta Paneer Cheela", price: 90, desc: "Per plate" },
                    { name: "Sweet Corn Masala Cheela", price: 90, desc: "Per plate" }
                ]
            },
            {
                category: "Sev Puri Chaat",
                items: [
                    { name: "Suji Sev Puri", price: 40, desc: "6 pieces" },
                    { name: "Aata Sev Puri", price: 40, desc: "6 pieces" },
                    { name: "Butter Sev Puri", price: 50, desc: "6 pieces" },
                    { name: "Paneer Sev Puri", price: 50, desc: "6 pieces" },
                    { name: "Maharaja Sev Puri", price: 60, desc: "6 pieces" }
                ]
            },
            {
                category: "Sev Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 40, desc: "6 pieces per plate" },
                    { name: "Butter Sev Papdi", price: 50, desc: "6 pieces per plate" },
                    { name: "Paneer Sev Papdi", price: 50, desc: "6 pieces per plate" },
                    { name: "Maharaja Sev Papdi", price: 60, desc: "6 pieces per plate" },
                    { name: "Dahi Bhalla Papdi Chaat", price: 70, desc: "Per plate" }
                ]
            },
            {
                category: "Karela",
                items: [
                    { name: "Karela Chaat", price: 30, desc: "1 piece per plate" },
                    { name: "Paneer Karela Chaat", price: 40, desc: "1 piece per plate" },
                    { name: "Dahi Vada", price: 60, desc: "2 pieces" }
                ]
            },
            {
                category: "Extra Items",
                items: [
                    { name: "Extra Butter", price: 20, desc: "Add extra butter" },
                    { name: "Extra Cheese", price: 20, desc: "Add extra cheese" },
                    { name: "Extra Paneer", price: 20, desc: "Add extra paneer" },
                    { name: "Golgappa Water Glass", price: 15, desc: "Extra water glass" },
                    { name: "Disposal Charge", price: 5, desc: "Extra disposal charge" }
                ]
            },
            {
                category: "Pizza",
                items: [
                    { name: "Cheese Hemu Ji Paneer Pizza", price: 150, desc: "Large size" },
                    { name: "Cheese Veg Pizza", price: 120, desc: "Large size" },
                    { name: "Cheese Veg Paneer Pizza", price: 140, desc: "Large size" },
                    { name: "Cheese Veg Corn Pizza", price: 130, desc: "Large size" },
                    { name: "Cheese Pasta Paneer Pizza", price: 150, desc: "Large size" },
                    { name: "Cheese Corn Italian Pizza", price: 140, desc: "Large size" },
                    { name: "Cheese Tandoori Paneer Pizza", price: 150, desc: "Large size" },
                    { name: "Pappy Paneer Onion Pizza", price: 140, desc: "Large size" },
                    { name: "Chilli Paneer Pizza", price: 150, desc: "Large size" },
                    { name: "Margherita Pizza", price: 130, desc: "Large size" },
                    { name: "Cheese Veggie Pizza", price: 120, desc: "Large size" },
                    { name: "Tomato Onion Pizza", price: 110, desc: "Large size" },
                    { name: "Spicy Indian Pizza", price: 140, desc: "Large size" },
                    { name: "Mushroom Paneer Pizza", price: 150, desc: "Large size" },
                    { name: "Onion Capsicum Pizza", price: 120, desc: "Large size" }
                ]
            },
            {
                category: "Pasta",
                items: [
                    { name: "Red Gravy Pasta", price: 100, desc: "Per plate" },
                    { name: "Cheese Red Gravy Pasta", price: 120, desc: "Per plate" },
                    { name: "Cheese Paneer Red Gravy Pasta", price: 140, desc: "Per plate" },
                    { name: "White Gravy Pasta", price: 100, desc: "Per plate" },
                    { name: "Cheese White Gravy Pasta", price: 120, desc: "Per plate" },
                    { name: "Cheese Paneer White Gravy Pasta", price: 140, desc: "Per plate" }
                ]
            },
            {
                category: "Sandwiches",
                items: [
                    { name: "Regular Sandwich", price: 60, desc: "Per piece" },
                    { name: "Cheese Veg Sandwich", price: 80, desc: "Per piece" },
                    { name: "Cheese Chilli Paneer Sandwich", price: 100, desc: "Per piece" },
                    { name: "Cheese Tandoori Paneer Sandwich", price: 100, desc: "Per piece" },
                    { name: "Cheese Makhani Sandwich", price: 90, desc: "Per piece" },
                    { name: "Cheese Corn Sandwich", price: 90, desc: "Per piece" },
                    { name: "Potato Paneer Sandwich", price: 80, desc: "Per piece" },
                    { name: "Cheese Chutney Sandwich", price: 70, desc: "Per piece" },
                    { name: "Cheese Chilli Toast Sandwich", price: 80, desc: "Per piece" }
                ]
            },
            {
                category: "Burgers",
                items: [
                    { name: "Veg Aloo Tikki Burger", price: 80, desc: "Per piece" },
                    { name: "Cheese Mexican Burger", price: 100, desc: "Per piece" },
                    { name: "Cheese Aloo Tikki Burger", price: 90, desc: "Per piece" }
                ]
            },
            {
                category: "Maggi",
                items: [
                    { name: "Veg Maggi", price: 50, desc: "Per bowl" },
                    { name: "Veg Corn Cheese Maggi", price: 70, desc: "Per bowl" },
                    { name: "Regular Maggi", price: 40, desc: "Per bowl" },
                    { name: "Veg Cheese Maggi", price: 60, desc: "Per bowl" },
                    { name: "Veg Cheese Paneer Maggi", price: 80, desc: "Per bowl" }
                ]
            },
            {
                category: "Patties",
                items: [
                    { name: "Aloo Masala Patties", price: 50, desc: "2 pieces" },
                    { name: "Cheese Corn Patties", price: 70, desc: "2 pieces" },
                    { name: "Cheese Mix Veg Patties", price: 70, desc: "2 pieces" },
                    { name: "Cheese Chilli Paneer Patties", price: 80, desc: "2 pieces" },
                    { name: "Cheese Tandoori Patties", price: 80, desc: "2 pieces" },
                    { name: "Cheese Garlic Patties", price: 70, desc: "2 pieces" },
                    { name: "Cheese Pasta Patties", price: 80, desc: "2 pieces" },
                    { name: "Cheese Maharaja Patties", price: 90, desc: "2 pieces" }
                ]
            }
        ],
        nai: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces per plate" },
                    { name: "Suji Golgappe", price: 30, desc: "7 pieces per plate" },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces per plate" },
                    { name: "Aata Suji Golgappe", price: 30, desc: "7 pieces per plate" }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Paneer Cheela", price: 60, desc: "Per plate" },
                    { name: "Butter Paneer Vegetable Cheela", price: 70, desc: "Per plate" },
                    { name: "Butter Paneer Jain Cheela", price: 70, desc: "Per plate" },
                    { name: "Butter Paneer Cheese Masala Cheela", price: 80, desc: "Per plate" },
                    { name: "Butter Paneer Tomato Onion Cheela", price: 80, desc: "Per plate" },
                    { name: "Butter Paper Cheela", price: 60, desc: "Per plate" },
                    { name: "Butter Paneer Baby Cheela", price: 70, desc: "Per plate" },
                    { name: "Paneer Mushroom Masala Cheela", price: 90, desc: "Per plate" },
                    { name: "Pasta Paneer Cheela", price: 90, desc: "Per plate" },
                    { name: "Sweet Corn Masala Cheela", price: 90, desc: "Per plate" }
                ]
            },
            {
                category: "Sev Puri Chaat",
                items: [
                    { name: "Suji Sev Puri", price: 40, desc: "6 pieces" },
                    { name: "Aata Sev Puri", price: 40, desc: "6 pieces" },
                    { name: "Butter Sev Puri", price: 50, desc: "6 pieces" },
                    { name: "Paneer Sev Puri", price: 50, desc: "6 pieces" },
                    { name: "Maharaja Sev Puri", price: 60, desc: "6 pieces" }
                ]
            },
            {
                category: "Sev Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 40, desc: "6 pieces per plate" },
                    { name: "Butter Sev Papdi", price: 50, desc: "6 pieces per plate" },
                    { name: "Paneer Sev Papdi", price: 50, desc: "6 pieces per plate" },
                    { name: "Maharaja Sev Papdi", price: 60, desc: "6 pieces per plate" },
                    { name: "Dahi Bhalla Papdi Chaat", price: 70, desc: "Per plate" }
                ]
            },
            {
                category: "Karela",
                items: [
                    { name: "Karela Chaat", price: 30, desc: "1 piece per plate" },
                    { name: "Paneer Karela Chaat", price: 40, desc: "1 piece per plate" },
                    { name: "Dahi Vada", price: 60, desc: "2 pieces" }
                ]
            },
            {
                category: "Extra Items",
                items: [
                    { name: "Extra Butter", price: 20, desc: "Add extra butter" },
                    { name: "Extra Cheese", price: 20, desc: "Add extra cheese" },
                    { name: "Extra Paneer", price: 20, desc: "Add extra paneer" },
                    { name: "Golgappa Water Glass", price: 15, desc: "Extra water glass" },
                    { name: "Disposal Charge", price: 5, desc: "Extra disposal charge" }
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
            const filteredItems = section.items.filter(item => {
                const matchesCategory = currentCategory === "all" || item.category === currentCategory;
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                     item.desc.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

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

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">₹ ${item.price}</p>
            <p class="desc">${item.desc}</p>
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

        modal.innerHTML = `
            <div class="modal-content">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
                <h3>Price: ₹ ${item.price}</h3>
                <div class="modal-buttons">
                    <button id="closeBtn">Close</button>
                    <button id
