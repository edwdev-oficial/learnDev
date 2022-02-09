const nav = document.querySelector('.sidebar');
const itemMenu = document.querySelector('.item-menu');
let itemMenuClone = ''

for (let i = 1; i <= 10; i++) {
    itemMenuClone = itemMenu.cloneNode(true);
    itemMenuClone.innerHTML = `Sidebar${i}`
    nav.appendChild(itemMenuClone);
};

// for (let i = 1; i>10; i++) {
//     let pclone = document.querySelector('.lorem').cloneNode(true);
    
// }

