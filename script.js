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
                    { name: "Aata Golgappe", price: 30, desc: "7 pieces crispy golgappe" },
                    { name: "Suji Golgappe", price: 30, desc: "7 pieces special suji golgappe" },
                    { name: "Jain Golgappe", price: 40, desc: "7 pieces no onion garlic" },
                    { name: "Special Golgappe", price: 50, desc: "7 pieces with sev & chutney" },
                    { name: "Dahi Golgappe", price: 45, desc: "7 pieces with dahi & spices" }
                ]
            },
            {
                category: "Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 40, desc: "Crispy papdi with chutney" },
                    { name: "Butter Papdi Chaat", price: 50, desc: "Butter loaded papdi" },
                    { name: "Dahi Papdi Chaat", price: 70, desc: "Dahi special papdi" },
                    { name: "Special Papdi Chaat", price: 80, desc: "Loaded with sev & chutney" },
                    { name: "Dahi Bhalla Chaat", price: 60, desc: "Soft bhalla with dahi" }
                ]
            },
            {
                category: "Karela Chaat",
                items: [
                    { name: "Karela Chaat", price: 40, desc: "Unique karela chaat" },
                    { name: "Paneer Karela Chaat", price: 50, desc: "Paneer karela fusion" },
                    { name: "Special Karela Chaat", price: 60, desc: "With sev & chutney" }
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
                    { name: "Sweet Corn Masala Cheela", price: 90, desc: "Corn masala filling" },
                    { name: "Hemu Ji Special Cheela", price: 100, desc: "Chef special premium cheela" },
                    { name: "Maggi Cheela", price: 85, desc: "Maggi mixed cheela" },
                    { name: "Veggie Delight Cheela", price: 75, desc: "Mixed vegetables cheela" }
                ]
            },
            {
                category: "Sev Puri",
                items: [
                    { name: "Suji Sev Puri", price: 40, desc: "6 pieces" },
                    { name: "Aata Sev Puri", price: 45, desc: "Healthy aata version" },
                    { name: "Butter Sev Puri", price: 50, desc: "Butter loaded" },
                    { name: "Paneer Sev Puri", price: 50, desc: "Paneer topping" },
                    { name: "Special Sev Puri", price: 60, desc: "Loaded with sev & chutney" }
                ]
            },
            {
                category: "Special",
                items: [
                    { name: "Hemu Ji Special Platter", price: 250, desc: "All chaat items combo" },
                    { name: "Family Cheela Platter", price: 400, desc: "4 cheela for family" },
                    { name: "Street Food Combo", price: 150, desc: "Golgappe + Papdi + Sev Puri" }
                ]
            }
        ],
        nai: [
            {
                category: "Gol Gappe",
                items: [
                    { name: "Aata Golgappe", price: 35, desc: "7 pieces crispy golgappe" },
                    { name: "Suji Golgappe", price: 35, desc: "7 pieces special suji golgappe" },
                    { name: "Jain Golgappe", price: 45, desc: "7 pieces no onion garlic" },
                    { name: "Special Golgappe", price: 55, desc: "7 pieces with sev & chutney" },
                    { name: "Dahi Golgappe", price: 50, desc: "7 pieces with dahi & spices" },
                    { name: "Masala Golgappe", price: 40, desc: "Extra masala golgappe" }
                ]
            },
            {
                category: "Papdi Chaat",
                items: [
                    { name: "Sev Papdi Chaat", price: 45, desc: "Crispy papdi with chutney" },
                    { name: "Butter Papdi Chaat", price: 55, desc: "Butter loaded papdi" },
                    { name: "Dahi Papdi Chaat", price: 75, desc: "Dahi special papdi" },
                    { name: "Special Papdi Chaat", price: 85, desc: "Loaded with sev & chutney" },
                    { name: "Dahi Bhalla Chaat", price: 65, desc: "Soft bhalla with dahi" },
                    { name: "Raj Kachori", price: 50, desc: "Large kachori with chutney" }
                ]
            },
            {
                category: "Karela Chaat",
                items: [
                    { name: "Karela Chaat", price: 45, desc: "Unique karela chaat" },
                    { name: "Paneer Karela Chaat", price: 55, desc: "Paneer karela fusion" },
                    { name: "Special Karela Chaat", price: 65, desc: "With sev & chutney" },
                    { name: "Karela Tikki", price: 50, desc: "Fried karela tikki" }
                ]
            },
            {
                category: "Cheela",
                items: [
                    { name: "Butter Cheela", price: 65, desc: "Classic butter cheela" },
                    { name: "Butter Paneer Vegetable Cheela", price: 75, desc: "Paneer + veg loaded" },
                    { name: "Butter Paneer Jain Cheela", price: 75, desc: "Jain style cheela" },
                    { name: "Butter Paneer Cheese Mushroom Cheela", price: 85, desc: "Loaded mushroom cheese" },
                    { name: "Butter Paneer Tomato Onion Cheela", price: 85, desc: "Tomato onion masala" },
                    { name: "Butter Cheese Cheela", price: 75, desc: "Cheese stuffed cheela" },
                    { name: "Paneer Baby Corn Cheela", price: 95, desc: "Paneer + baby corn special" },
                    { name: "Paneer Mushroom Masala Cheela", price: 95, desc: "Spicy mushroom masala" },
                    { name: "Pasta Paneer Cheela", price: 95, desc: "Fusion style cheela" },
                    { name: "Sweet Corn Masala Cheela", price: 95, desc: "Corn masala filling" },
                    { name: "Hemu Ji Special Cheela", price: 110, desc: "Chef special premium cheela" },
                    { name: "Maggi Cheela", price: 90, desc: "Maggi mixed cheela" },
                    { name: "Veggie Delight Cheela", price: 80, desc: "Mixed vegetables cheela" },
                    { name: "Paneer Tikka Cheela", price: 100, desc: "Paneer tikka cheela" }
                ]
            },
            {
                category: "Sev Puri",
                items: [
                    { name: "Suji Sev Puri", price: 45, desc: "6 pieces" },
                    { name: "Aata Sev Puri", price: 50, desc: "Healthy aata version" },
                    { name: "Butter Sev Puri", price: 55, desc: "Butter loaded" },
                    { name: "Paneer Sev Puri", price: 55, desc: "Paneer topping" },
                    { name: "Special Sev Puri", price: 65, desc: "Loaded with sev & chutney" },
                    { name: "Dahi Sev Puri", price: 60, desc: "With dahi & spices" }
                ]
            },
            {
                category: "Special",
                items: [
                    { name: "Hemu Ji Special Platter", price: 270, desc: "All chaat items combo" },
                    { name: "Family Cheela Platter", price: 420, desc: "4 cheela for family" },
                    { name: "Street Food Combo", price: 160, desc: "Golgappe + Papdi + Sev Puri" },
                    { name: "Grand Family Combo", price:
