
const gridContainer = document.createElement("div");
gridContainer.className = 'gridContainer'; 
const grid = document.createElement("div");
grid.className = "gridClone";
const container = document.querySelector(".container");
container.appendChild(gridContainer);

function createGrid(size){
   for(let  i=0;i<size*size;i++){
      grid.style.width = `${600 / size}px`;
      grid.style.height = `${600 / size}px`;
      gridContainer.appendChild(grid.cloneNode());
   }
const grids = document.querySelectorAll('.gridClone');
grids.forEach((clonedNode)=>{
   clonedNode.addEventListener('mouseenter', (e)=> {
      e.target.style.backgroundColor = 'black';
   })
});
}
createGrid(16);
const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons';
const gridDimensionBtn = document.createElement('button');
gridDimensionBtn.textContent = 'Resizing';
gridDimensionBtn.addEventListener("click", changeDimension);

function changeDimension(){
   let newDimension = prompt('choose a number between 1 and 100', );
   const grids = document.querySelectorAll('.gridClone');
   grids.forEach((grid) => {
      console.log(grid.parentNode);  // the parentNode is gridContainer
      grid.parentNode.removeChild(grid); // Remove each grid element from its parent node
      
  });
   createGrid(newDimension);
}

container.appendChild(buttonsContainer);
buttonsContainer.appendChild(gridDimensionBtn);