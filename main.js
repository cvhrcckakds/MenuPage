import menu from "./database.js"

const menuContainer = document.getElementById("menu-container")
const filterButton=document.querySelectorAll(".filter-btn")


document.addEventListener("DOMContentLoaded", () => {
    displayMenu(menu);
})

function displayMenu(menuItems) {
    let titles = menuItems.map((menuItem) => `
        <div class="d-flex align-items-center gap-3 flex-column flex-md-row my-2" id="card">
            <img src="${menuItem.img}" alt="" id="image" class="rounded shadow" />
            <div>
                <div class="d-flex justify-content-between">
                    <h5>${menuItem.title}</h5>
                    <p>$ ${menuItem.price}</p>
                </div>
                <p class="lead">${menuItem.desc}</p>
            </div>
        </div>
    `).join(""); 
    menuContainer.innerHTML = titles;
}

filterButton.forEach((button)=>{
   
    button.addEventListener("click",(e)=>{
        const category=e.target.dataset.id
      searcCategory(category)
    })
})

function searcCategory(categoryInfo){
    console.log(categoryInfo)

    const filtredMenu=menu.filter((menuItem)=>{
        if(categoryInfo===menuItem.category) return menuItem
    })
  
    if(categoryInfo==="all"){
        displayMenu(menu)
    }else{
        displayMenu(filtredMenu)
    }
}