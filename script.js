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
      { name: "Aata Golgappe", price: 50, desc: "6 pieces crispy golgappe" },
      { name: "Suji Golgappe", price: 50, desc: "6 pieces special suji golgappe" },
      { name: "Jain Golgappe", price: 50, desc: "No onion garlic version" }
    ]
  },
  {
    category: "Cheela",
    items: [
      { name: "Butter Cheela", price: 60, desc: "Classic butter cheela" },
      { name: "Butter Paneer Vegetable Cheela", price: 70, desc: "Paneer + veg loaded" },
      { name: "Butter Paneer Jain Cheela", price: 70, desc: "Jain style cheela" },
      { name: "Butter Paneer Cheese Mushroom Cheela", price: 80, desc: "Loaded mushroom cheese" },
      { name: "Butter Paneer Tomato Onion Cheela", price: 80, desc: "Tomato onion masala" },
      { name: "Butter Cheese Cheela", price: 70, desc: "Cheese stuffed cheela" },
      { name: "Paneer Baby Corn Cheela", price: 90, desc: "Paneer + baby corn special" },
      { name: "Paneer Mushroom Masala Cheela", price: 90, desc: "Spicy mushroom masala" },
      { name: "Pasta Paneer Cheela", price: 90, desc: "Fusion style cheela" },
      { name: "Sweet Corn Masala Cheela", price: 90, desc: "Corn masala filling" }
    ]
  },
  {
    category: "Sev Puri",
    items: [
      { name: "Suji Sev Puri", price: 40, desc: "6 pieces" },
      { name: "Aata Sev Puri", price: 45, desc: "Healthy aata version" },
      { name: "Butter Sev Puri", price: 50, desc: "Butter loaded" },
      { name: "Paneer Sev Puri", price: 50, desc: "Paneer topping" }
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

