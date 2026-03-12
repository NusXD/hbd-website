let clickCount=0
const cake=document.getElementById("cake")

cake.onclick=()=>{

clickCount++

if(clickCount===1){

cake.classList.add("move")

setTimeout(()=>{
msg.classList.add("show")
},1000)

setTimeout(()=>{
photo.classList.add("show")
},1600)

confetti()

}

else if(clickCount===2){

document.getElementById("tiktok").style.display="block"

}

}

function confetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div")
c.className="confetti"

c.style.left=Math.random()*100+"vw"
c.style.background=`hsl(${Math.random()*360},100%,50%)`
c.style.animationDuration=(3+Math.random()*3)+"s"

document.body.appendChild(c)

setTimeout(()=>c.remove(),6000)

}

}