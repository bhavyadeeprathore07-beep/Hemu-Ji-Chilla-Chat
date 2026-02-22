function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light");
}

window.onload = function(){
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
  }
}

function showBranch(branch){
  let menu = document.getElementById("menuSection");

  if(branch === 1){
    menu.innerHTML = `
    <h2>Branch 1 Menu</h2>
    <div class="menu-item">Aata Golgappe [20 Pieces]</div>
    <div class="menu-item">Butter Paneer Cheela</div>
    <div class="menu-item">Cheese Paneer Pizza</div>
    <div class="menu-item">Veg Cheese Maggi</div>
    `;
  } else {
    menu.innerHTML = `
    <h2>Branch 2 Menu</h2>
    <div class="menu-item">Aata Golgappe [20 Pieces]</div>
    <div class="menu-item">Karela Chaat</div>
    <div class="menu-item">Paneer Cheela</div>
    `;
  }
}
