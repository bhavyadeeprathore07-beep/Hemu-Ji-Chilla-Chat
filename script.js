let items = [
  {name:"Aata Golgappe [20 Pieces]",category:"chaat"},
  {name:"Butter Paneer Cheela",category:"cheela"},
  {name:"Cheese Paneer Pizza",category:"pizza"},
  {name:"Veg Cheese Maggi",category:"maggi"},
  {name:"Karela Chaat",category:"chaat"},
  {name:"Paneer Cheela",category:"cheela"}
];

function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark")?"dark":"light");
}

window.onload=function(){
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }
  displayItems(items);
}

function displayItems(list){
  let container=document.getElementById("menuContainer");
  container.innerHTML="";
  list.forEach(item=>{
    container.innerHTML+=`
      <div class="menu-card glass">
        <h4>${item.name}</h4>
      </div>
    `;
  });
}

function filterCategory(cat){
  let filtered=items.filter(i=>i.category===cat);
  displayItems(filtered);
}

function showBranch(branch){
  if(branch===1){
    alert("Showing Madhav Ganj Branch Menu");
  }else{
    alert("Showing Nai Sadak Branch Menu");
  }
}
