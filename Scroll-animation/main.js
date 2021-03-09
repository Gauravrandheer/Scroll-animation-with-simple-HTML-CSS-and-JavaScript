const boxes = document.querySelectorAll(`.box`)

window.addEventListener('scroll',checkbox)


checkbox()

function checkbox(){
   const trigger = window.innerHeight/5 * 4;

  boxes.forEach(box => {
     const boxtop = box.getBoundingClientRect().top//basically give heigth where we compare whether boxtop value is less than triggerbottom so that we can add show class or remove it.

     if(boxtop<trigger){
       box.classList.add('show')
     }else{
       box.classList.remove('show')
     }
  });

}
