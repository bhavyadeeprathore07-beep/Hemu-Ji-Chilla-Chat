document.addEventListener("DOMContentLoaded", () => {

    // ===== ELEMENTS =====
    const menuContainer = document.getElementById("menuContainer");
    const themeToggle = document.getElementById("themeToggle");
    const branchSelect = document.getElementById("branchSelect");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // ===== STATE =====
    let currentBranch = "madhav";
    let currentCategory = "all";
    let searchQuery = "";

    // ===== PHONE NUMBERS =====
    const branchPhones = {
        madhav: "919876543210",
        nai: "919876543211"
    };

    // ===== MENU DATA =====
    const menuData = {
        madhav: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces" },
                    { name: "Suji Golgappe", price: 30, desc: "7 pieces" },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces" }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Paneer Cheela", price: 60, desc: "Per plate" },
                    { name: "Butter Paneer Cheese Masala", price: 80, desc: "Loaded cheese" },
                    { name: "Paneer Mushroom Cheela", price: 90, desc: "Spicy mushroom" },
                    { name: "Hemu Ji Special Cheela", price: 100, desc: "Special premium" }
                ]
            },
            {
                category: "Sev Puri Chaat",
                items: [
                    { name: "Suji Sev Puri", price: 40, desc: "6 pieces" },
                    { name: "Butter Sev Puri", price: 50, desc: "Butter loaded" }
                ]
            }
        ],

        nai: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces" },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces" }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Paneer Cheela", price: 60, desc: "Per plate" },
                    { name: "Hemu Ji Special Cheela", price: 100, desc: "Special premium" }
                ]
            }
        ]
    };

    // ===== LOAD MENU =====
    function loadMenu() {

        menuContainer.innerHTML = "";

        const branchMenu = menuData[currentBranch];

        branchMenu.forEach(section => {

            // filter items
            const filteredItems = section.items.filter(item => {

                const matchCategory =
                    currentCategory === "all" ||
                    section.category === currentCategory;

                const matchSearch =
                    item.name.toLowerCase().includes(searchQuery) ||
                    item.desc.toLowerCase().includes(searchQuery);

                return matchCategory && matchSearch;
            });

            if (filteredItems.length === 0) return;

            // category title
            const title = document.createElement("h2");
            title.classList.add("category-title");
            title.innerText = section.category;

            menuContainer.appendChild(title);

            // items
            filteredItems.forEach(item => {

                const card = document.createElement("div");
                card.classList.add("menu-card");

                card.innerHTML = `
                    <h3>${item.name}</h3>
                    <p class="price">₹ ${item.price}</p>
                    <p class="desc">${item.desc}</p>
                `;

                card.onclick = () => showModal(item);

                menuContainer.appendChild(card);
            });

        });

    }

    // ===== MODAL =====
    function showModal(item) {

        const modal = document.createElement("div");
        modal.classList.add("modal");

        modal.innerHTML = `
            <div class="modal-content">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
                <h3>₹ ${item.price}</h3>

                <div class="modal-buttons">
                    <button id="closeBtn">Close</button>
                    <button id="orderBtn">Order</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // close
        document.getElementById("closeBtn").onclick = () => modal.remove();

        // order
        document.getElementById("orderBtn").onclick = () => {
            const phone = branchPhones[currentBranch];
            const msg = `I want to order ${item.name}`;
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
        };

        // click outside
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // ===== SEARCH =====
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        loadMenu();
    });

    // ===== FILTER =====
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentCategory = btn.dataset.category;
            loadMenu();
        });
    });

    // ===== BRANCH SWITCH =====
    branchSelect.addEventListener("change", (e) => {
        currentBranch = e.target.value;
        loadMenu();
    });

    // ===== DARK MODE =====
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // ===== SCROLL =====
    window.scrollToMenu = () => {
        document.getElementById("menuSection").scrollIntoView({
            behavior: "smooth"
        });
    };

    // ===== WHATSAPP BUTTON =====
    window.orderOnWhatsApp = () => {
        const phone = branchPhones[currentBranch];
        window.open(`https://wa.me/${phone}`);
    };

    // ===== INIT =====
    loadMenu();

});
