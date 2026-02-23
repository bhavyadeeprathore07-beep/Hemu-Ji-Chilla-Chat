document.addEventListener("DOMContentLoaded", function () {

    const menuContainer = document.getElementById("menuContainer");

    if (!menuContainer) {
        console.error("menuContainer not found in HTML");
        return;
    }

    const menuData = [
        {
            category: "Gol Gappe",
            items: [
                { name: "Aata Golgappe", price: 50, desc: "6 Pieces crispy golgappe" },
                { name: "Suji Golgappe", price: 50, desc: "6 Pieces special suji golgappe" },
                { name: "Jain Golgappe", price: 50, desc: "No onion & garlic" }
            ]
        },
        {
            category: "Cheela",
            items: [
                { name: "Butter Cheela", price: 60, desc: "Classic butter cheela" },
                { name: "Paneer Cheela", price: 70, desc: "Stuffed with paneer" },
                { name: "Butter Paneer Masala Cheela", price: 90, desc: "Premium loaded cheela" }
            ]
        },
        {
            category: "Sev Puri Chaat",
            items: [
                { name: "Suji Sev Puri", price: 40, desc: "6 piece sev puri" },
                { name: "Butter Sev Puri", price: 50, desc: "Butter topped sev puri" },
                { name: "Paneer Sev Puri", price: 50, desc: "Paneer sev puri" }
            ]
        }
    ];

    function loadMenu() {
        menuContainer.innerHTML = "";

        menuData.forEach(section => {

            const categoryTitle = document.createElement("h2");
            categoryTitle.innerText = section.category;
            categoryTitle.classList.add("category-title");
            menuContainer.appendChild(categoryTitle);

            section.items.forEach(item => {

                const card = document.createElement("div");
                card.classList.add("menu-card");

                card.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>₹ ${item.price}</p>
                `;

                card.addEventListener("click", function () {
                    showDetails(item);
                });

                menuContainer.appendChild(card);
            });
        });
    }

    function showDetails(item) {

        const modal = document.createElement("div");
        modal.classList.add("modal");

        modal.innerHTML = `
            <div class="modal-content">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
                <h3>Price: ₹ ${item.price}</h3>
                <button id="closeBtn">Close</button>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById("closeBtn").addEventListener("click", function () {
            modal.remove();
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    loadMenu();

});
