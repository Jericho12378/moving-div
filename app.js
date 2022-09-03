const box = document.getElementById('box');
box.style.position = 'absolute';

// document.addEventListener('click', function handleClick(event) {
//     box.style.top = Math.floor(Math.random() * 1001) + 'px';
//     box.style.left = Math.floor(Math.random() * 1001) + 'px';
// });


// document.addEventListener('mouseover', (event) => {
    
   
//         box.style.top = Math.floor(Math.random() * 500) + 'px';
//         box.style.left = Math.floor(Math.random() * 1000) + 'px';
 
// })
var offsets = document.getElementById("container").getBoundingClientRect();
   
var top = offsets.top
var left = offsets.left
console.log(top)
console.log(left)

function myOverFunction() {
    document.getElementById("box").addEventListener('mouseover', (even) =>{
        box.style.top = Math.floor(Math.random() * 500) + 'px';
        box.style.left = Math.floor(Math.random() * 1000) + 'px';
    })
  }

// function clicked(){
//   document.getElementById("boxStatic").addEventListener('mouseenter',(even) =>{
   
//   })
  
//   }

  
