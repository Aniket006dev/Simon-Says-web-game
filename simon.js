let highScore=0;
let gSeq=[];
let uSeq=[];
let lev=0;
let start=false;
function upgrade(){
    lev=lev+1;
    let level=document.querySelector(".para");
    level.innerText=`level ${lev}`;
    let ran=Math.floor(Math.random()*4);
    let getEl=document.querySelector(`.b${ran+1}`);
    let s=getEl.getAttribute("id");
    gSeq.push(s);
    blink(getEl);
}
function blink(el){
    el.classList.add("blink");
    setTimeout(()=>el.classList.remove("blink"),240);
    
}
function match(el){
    if(uSeq[el]==gSeq[el]){
        if(uSeq.length==gSeq.length){
            setTimeout(upgrade(),200);
            uSeq=[];
        }
    }
    else{
        document.querySelector(".para").innerHTML=`Game Over!! \n<b>Your score is : ${lev}</b><br>press any key to start`;
        let score=lev
        if(highScore<=score){
            highScore=score;
        }
        document.querySelector(".highScore").innerHTML=`<b>Your High Score: ${highScore}</b>`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{document.querySelector("body").style.backgroundColor="white"},150);
        start=false;
        lev=0;
        gSeq=[];
        uSeq=[];

    }

}
let btnPrs =function(){
    let btn=this;
    btn.classList.add("press")
    setTimeout(()=>btn.classList.remove("press"),150)
    uSeq.push(this.getAttribute("id"));
    match(uSeq.length-1);
}
addEventListener("keypress",()=>{
    if(start==false){
        upgrade();
        let btns=document.querySelectorAll(".box");
        btns.forEach((e)=>(e.addEventListener("click",btnPrs)));
        start=true;
    }
})
let instbtn=document.querySelector(".instbtn");
let inst=document.querySelector(".instructions")
let hintbtn=document.querySelector(".hintbtn");
let flag
let flag2;
instbtn.addEventListener("click",()=>{
        flag=inst.classList.toggle("inst");
        if(flag2){
            flag2=hintdiv.classList.toggle("hint");
        }
})
let hint=gSeq;
let hintdiv=document.querySelector(".hintdiv");
hintbtn.addEventListener("click",()=>{
    flag2=hintdiv.classList.toggle("hint")
    if(start==false){
        hintdiv.innerHTML="<b>Press any key to start</b>";
    }
    else{
        hintdiv.innerHTML=`<b>You have to enter in sequence : ${hint}`;
    }
    setTimeout(()=>{
        flag2=hintdiv.classList.remove("hint")
    },3000)
    if(flag){
        flag=inst.classList.toggle("inst");
    }

})
