const branchSelect = document.getElementById("branchSelect");
const branchTitle = document.getElementById("branchTitle");
const menuContainer = document.getElementById("menuContainer");
const themeToggle = document.getElementById("themeToggle");

const data = {
    chilla: {
        title: "Hemu Ji Chilla",
        items: ["Paneer Chilla", "Masala Chilla", "Cheese Chilla", "Butter Chilla"]
    },
    chat: {
        title: "Hemu Ji Chat Bhandar",
        items: ["Gol Gappe", "Aloo Tikki", "Papdi Chat", "Sev Puri"]
    }
};

function loadBranch(branch) {
    branchTitle.innerText = data[branch].title;
    menuContainer.innerHTML = "";

    data[branch].items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card", "glass");
        card.innerHTML = `
            <h3>${item}</h3>
            <p>Delicious street style special</p>
        `;
        menuContainer.appendChild(card);
    });
}

branchSelect.addEventListener("change", () => {
    loadBranch(branchSelect.value);
});

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.innerText = "☀️";
    } else {
        themeToggle.innerText = "🌙";
    }
});

loadBranch("chilla");
