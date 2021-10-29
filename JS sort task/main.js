const sortbutton = document.getElementById("Sort");
const addbutton = document.getElementById("Add");
const container = document.getElementById("cont");
let obj = {id:"",
           number:0};
          
const array = [];
let i = 0;
let key = 1;
  addbutton.addEventListener("click", () => {
  square = document.createElement('div');
  square.id = "square_" + new Date().getTime().toString();
  btn  = document.createElement('button');

  square.className = 'square';
  btn.className = 'remove';
  let newobj = new Object({
    id: square.id,
    number: (Math.floor(Math.random() * 100))
  });
  array.push(newobj);
  console.log(array);
  square.innerHTML = array[i++].number;
  square.appendChild(btn).innerHTML = 'X';
  container.appendChild(square);  
  });

  
  sortbutton.addEventListener("click", () => {
    let containerHTML = '';
    for(let i = 0; i < array.length;++i){
       for(let j = array.length-1;j>i;--j){
         if(array[j].number<array[j-1].number){
           let tmp = array[j];
           array[j] = array[j-1];
           array[j-1] = tmp;
         }
       }
     }
  for (let i = 0; i < array.length; ++i) {
    containerHTML += '<div class="square" >' + (array[i].number) + '<button class = "remove" onclick = "remove(this)">'+'X'+'</button>' +'</div>';
  }
    container.innerHTML = containerHTML;
  });
  
  function remove(e) {
    e.parentNode.remove();
    
  }