
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

function mainLoaded (){
  let iframes = document.querySelectorAll('iframe');
  let count = 0;

  let $html = document.querySelector('html');
  console.log($html)

  imagesLoaded( $html , function() {
    console.log('all images are loaded');
    setTimeout(function(){
      $html.classList.add("loaded")
    },1000)
    // iframes.forEach((i) => { 
    //   i.addEventListener('load', function () {
    //     count++;
    //     if(count == iframes.length) {
    //       console.log("all iframes are loaded")
    //       $html.classList.add("loaded")
    //     }
    //   });
    // });
  });
}

function headerToggle (){
  let burger = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let tr = false;

  burger.innerHTML = `<hr/><hr/><hr/>`;
  burger.addEventListener("click",function(){
    tr = !tr;
    if(tr){
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }

  })
}

mainLoaded();
headerToggle();

