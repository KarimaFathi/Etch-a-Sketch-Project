// Create grid container element
const gridContainer = document.createElement("div");
gridContainer.className = 'gridContainer'; 

// Create individual grid item element
const grid = document.createElement("div");
grid.className = "gridClone";

// Append grid container to the main container in the HTML
const container = document.querySelector(".container");
container.appendChild(gridContainer);

// Function to create grid based on input size
function createGrid(size){
   // Loop to create grid items
   for(let  i=0;i<size*size;i++){
      // Set the width and height of each grid item based on the container 
      //size divided by the number of grid items per row/column
      grid.style.width = `${600 / size}px`;
      grid.style.height = `${600 / size}px`;
      gridContainer.appendChild(grid.cloneNode());
   }
// Apply hover effect to each grid item
const gridElements = document.querySelectorAll('.gridClone');
gridElements.forEach((clonedNode)=>{
   let opacityCounter = 0;
   clonedNode.addEventListener('mouseenter', (e)=> {
      //Set background color to blue on mouse hover.
      e.target.style.backgroundColor = 'blue';
      // Gradually increase opacity up to 1 with each hover if below 1.
      if(opacityCounter<1){
         opacityCounter = opacityCounter + 0.1;
      }
      
         e.target.style.opacity = opacityCounter > 1 ? 1 : opacityCounter; 
         
   })
});
}

//  ========== Second METHOD ==========
// let opacityCounter = 0; // Initialize opacity counter for each grid item
//         clonedNode.addEventListener('mouseenter', (e) => {
//             e.target.style.backgroundColor = 'blue';
//             opacityCounter += 0.1; // Increment opacity
//             e.target.style.opacity = Math.min(opacityCounter, 1);
// })
// });
// }

// Call createGrid function with initial size
createGrid(16);

// Create buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons';

// Create button for resizing the grid
const gridDimensionBtn = document.createElement('button');
gridDimensionBtn.textContent = 'Resize';
gridDimensionBtn.addEventListener("click", changeDimension);

// Function to change grid dimension based on user input
function changeDimension(){
   let newDimension = prompt('choose a number between 1 and 100', );
   const gridElements = document.querySelectorAll('.gridClone');
   gridElements.forEach((grid) => {
      console.log(grid.parentNode);  // the parentNode is gridContainer
      grid.parentNode.removeChild(grid); // Remove each grid element from its parent node
      
  });
   createGrid(newDimension);
}

container.appendChild(buttonsContainer);
buttonsContainer.appendChild(gridDimensionBtn);

const randomizeBtn = document.createElement("button");

randomizeBtn.addEventListener("click",randomizeColor);

function randomizeColor(){
   const gridElements = document.querySelectorAll('.gridClone');
   gridElements.forEach((clonedNode)=>{
   clonedNode.addEventListener('mouseenter', (e)=> {
      // Generate random RGB color
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      e.target.style.backgroundColor = randomColor;
   })
   })
}

// Create button for randomizing grid item colors
randomizeBtn.textContent = "Randomize";
buttonsContainer.appendChild(randomizeBtn);

const clearBtn = document.createElement("button");

clearBtn.addEventListener("click",clearGrid);


// Function to clear grid
function clearGrid() {
   const gridElements = document.querySelectorAll('.gridClone');
   gridElements.forEach((clonedNode)=>{
   console.log(clonedNode); // <div class=gridClone ...></div>
   clonedNode.style.backgroundColor = "white"; 
   //Resetting opacity to 1 ensures that the border remains unaffected by any opacity changes applied by first function.
   clonedNode.style.opacity = 1;
   })
   }
   
clearBtn.textContent = "Clear";
buttonsContainer.appendChild(clearBtn);

