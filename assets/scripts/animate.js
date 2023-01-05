

let $body = document.querySelector("body");
let animatedTexts = $body.querySelectorAll('.animated-text');
        
function animateText(){
    // Text
    animatedTexts.forEach(function(el) { 
      //let tl = new TimelineLite;
      let splitText = el.innerHTML.split("<br>");
      let temp = []; 
      //console.log(el)

      splitText.forEach(function(text,idx){
        let txt = text.split(" ");
        let arr = [];
        txt.forEach(function(t){
          arr.push(t.replace(/([^\x00-\x80]|\w|.)/g, "<span class='_text'>$&</span>"))
        })
        temp.push(arr.map(t => `<div class='_box'>${t}</div>`).join(""))
        if(idx != splitText.length -1) {
          temp.push("<br>")
        }
      })
      el.innerHTML = temp.join("")
      //console.log(el.innerHTML)

      let $text = document.querySelectorAll('.animated-text span');
      let tl = new TimelineMax();

      tl
        .delay(2)
        .staggerFrom($text, 0.2, {alpha: 0,y:50, z: 0, ease:Linear.easeNone}, 0.05)
    });
}


animateText()