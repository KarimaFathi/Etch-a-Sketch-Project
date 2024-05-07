const grid = document.createElement("div");
grid.className = "gridClone";
const container = document.querySelector(".container");


for(let  i=0;i<256;i++){
   grid.style.width = `${600 / 16}px`;
   grid.style.height = `${600 / 16}px`;
   container.appendChild(grid.cloneNode());
}

const grids = document.querySelectorAll('.gridClone');
grids.forEach((clonedNode)=>{
   clonedNode.addEventListener('mouseenter', (e)=> {
      e.target.style.backgroundColor = 'black';
   })
});

