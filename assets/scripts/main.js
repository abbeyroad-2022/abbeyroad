


function mainLoaded (){
  let iframes = document.querySelectorAll('iframe');
  let count = 0;

  let $html = document.querySelector('html');
  console.log($html)

  imagesLoaded( $html , function() {
    console.log('all images are loaded');
    iframes.forEach((i) => { 
      i.addEventListener('load', function () {
        count++;
        if(count == iframes.length) {
          console.log("all iframes are loaded")
          $html.classList.add("loaded")
        }
      });
    });
  });
}

function navBurger (){
  let burger = document.querySelector(".burger");
  let tr = false;

  burger.innerHTML = `<hr/><hr/><hr/>`;
  burger.addEventListener("click",function(){
    tr = !tr;
    console.log(tr)
    if(tr){
      burger.classList.add("on");
    } else {
      burger.classList.remove("on");
    }

  })
}

mainLoaded();
navBurger();

