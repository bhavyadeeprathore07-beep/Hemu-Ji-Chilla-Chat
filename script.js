const branchTitle = document.getElementById("branchTitle");
const menuContainer = document.getElementById("menuContainer");

const menuData = [
    {
        category: "Gol Gappe",
        items: [
            { name: "Aata Golgappe", price: 50, desc: "6 Pieces crispy golgappe" },
            { name: "Suji Golgappe", price: 50, desc: "6 Pieces special suji golgappe" },
            { name: "Jain Golgappe", price: 50, desc: "6 Pieces without onion & garlic" }
        ]
    },
    {
        category: "Cheela",
        items: [
            { name: "Butter Cheela", price: 60, desc: "Classic butter cheela" },
            { name: "Paneer Cheela", price: 70, desc: "Stuffed with fresh paneer" },
            { name: "Butter Paneer Masala Cheela", price: 90, desc: "Loaded premium cheela" }
        ]
    },
    {
        category: "Sev Puri Chaat",
        items: [
            { name: "Suji Sev Puri", price: 40, desc: "6 piece sev puri" },
            { name: "Butter Sev Puri", price: 50, desc: "Rich butter sev puri" },
            { name: "Paneer Sev Puri", price: 50, desc: "Paneer topped sev puri" }
        ]
    },
    {
        category: "Extra Add Items",
        items: [
            { name: "Extra Butter", price: 20, desc: "Add extra butter topping" },
            { name: "Extra Paneer", price: 20, desc: "Add paneer topping" },
            { name: "Extra Golgappe Water Glass", price: 15, desc: "Extra flavored water" }
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

            card.addEventListener("click", () => showDetails(item));

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
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;

    document.body.appendChild(modal);
}

loadMenu();
