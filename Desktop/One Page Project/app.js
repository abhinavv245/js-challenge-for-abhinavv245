const incrementbtn = document.querySelector("#increment");
const decrementbtn = document.querySelector("#decrement");
let count = 0;
const inc = document.getElementById("counter");
const ulElement= document.getElementById('listitems');

function incrementcounter() {
  count++;
  inc.innerHTML = count;
  const liEl=document.createElement('li');//create first element

 liEl.innerHTML='<b>Sentence: </b>' + count; //add inner HTML
    liEl.setAttribute('data-counter',count);
    ulElement.append(liEl); //append it at the last
    console.log(liEl);
}
function decrementcounter() {
    const liEl= ulElement.querySelector(`[data-counter="${count}"]`);
    liEl.remove();
    if (count >= 1) {
      count--;
    }
  inc.innerHTML = count;
 
}

incrementbtn.addEventListener("click", incrementcounter);
decrementbtn.addEventListener("click", decrementcounter);
