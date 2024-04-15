let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let pic = document.querySelector(".i2");
let btn3 = document.querySelector(".btn3");
//  let btn4 = document.querySelector(".btn4");
let pre = document.querySelector(".pre");
let music = document.querySelector(".hbd");
 let contain = document.querySelector(".container");
let span = document.querySelector(".noice");
let span2 = document.querySelector(".noice2");
let span3 = document.querySelector(".noice3");
btn1.addEventListener('click', ()=>{
document.querySelector(".h").style.visibility = "hidden";
   btn1.style.visibility = "hidden";
   btn2.style.visibility = "hidden";
   pre.style.visibility = "visible";
   pre.style.animation = "okxx 20s";
   pre.style.animationIterationCount = "infinite";
   pre.style.animationDirection = "alternate";
   music.play();
   
   setTimeout(() => {
    contain.style.visibility = "visible";
    contain.style.animation = "ok 3s";
    span.style.visibility = "visible";
    span.style.animation = "okx2 4s"
   }, 2000);
   setTimeout(() => {
    span.style.border = "2px solid black"
    span.style.backgroundColor = "white"
setTimeout(() => {
    span2.style.visibility = "visible";
    span2.style.animation = "okx2 4s";
    
    setTimeout(() => {
        span3.style.backgroundColor = "Black";
        span3.style.color = "white";
        span3.style.visibility = "visible";
        span3.innerText = "My piari Ezza Hoorain😘💕💕"
        span3.style.animation = "okx3 2s";
    }, 3000);

}, 2000);
 
   
   }, 3000);
   
   setTimeout(() => {
    btn3.style.visibility = "visible" ;
   }, 9000);
//    alert("heli");
});
btn2.addEventListener('click', ()=>{
    alert("ghalat baat 🥱. shaba Handfree lgao pehlay...") ;
});


btn3.addEventListener('click', ()=>{
    document.querySelector("main").style.backgroundColor = "rgba(250, 160, 160, 0.543)";
    btn3.style.visibility = "hidden" ;
    span.remove();
    span2.remove();
    span3.remove();
    pre.remove();
    pic.remove();
    document.querySelector(".container2").style.visibility = "visible";
    setTimeout(() => {

        // const con = document.createElement("node");
        var para = document.createElement("p");
        para.innerText = "Happy Birthday, my love! 🎉 Today is all about celebrating you and the wonderful person you are. You bring so much joy, love, and light into my life every single day, and I'm endlessly grateful for you. Here's to another year of laughter, adventures, and cherished moments together. Wishing you all the happiness in the world today and always. I love you more than words can express.Cheers to you, my amazing wife! 🎂💖💕💞💞.. Soban 💞 Ezza ..💖😘😘🌹🎉";
        let contain2 = document.querySelector(".container2");
        contain2.appendChild(para);
        let btn4 =document.createElement("button");
            btn4.innerText = ">>>>>";
            contain2.appendChild(btn4);
            btn4.setAttribute("class" , "btn4");
        setTimeout(() => {
            
            btn4.style.visibility = "visible" ;
        }, 5000);
        btn4.addEventListener('click', ()=>{
            btn4.remove();
            para.remove();
            let vid = document.createElement("video");
            vid.setAttribute("src" , "vid.mp4");
            vid.setAttribute("class" , "vid");
            vid.setAttribute("autoplay" , "");
            vid.setAttribute("muted" , "");
            vid.setAttribute("loop" , "");
            // vid.setAttribute("muted");
            // vid.setAttribute("autoplay");
            document.querySelector("main").style.backgroundColor = "black";
            document.querySelector("main").appendChild(vid);
            let btn5 =document.createElement("button");
            btn5.innerText = ">>>>>";
            document.querySelector('main').appendChild(btn5);
            btn5.setAttribute("class" , "btn4");
            btn5.style.visibility = "visible";
            btn5.style.color = "pink";
            btn5.style.transform = "translateY(-105px)";
           btn5.addEventListener('click', ()=>{
            btn5.remove();
            vid.remove();
            
            var para = document.createElement("p");
            para.innerText = "AlhamduLillah.💞Thank You so much My Jaani meda hamesha saath devnr keetay, Hamesha khush reh meday Naal , Hameesha Tandrust Reh , Kamiyab reh , Ameen SumaAmeen , I Love You More say bhi ziaada 😘😘😘😘💋💋💞💞💞. Eh m teday keetay special website code keeti hay teeku wish krnr keetay hope so tu isku Qabool keeta hosi 💞💞💞💞😘😘😘😘 JazakaAllah Jaanu medi 😘😘 medi ikloti , forever jaani 😘😘💞💞";
            let contain2 = document.querySelector(".container2");
            contain2.appendChild(para);
            para.style.color = "pink";

            const btn6 =document.createElement("button");
            btn6.innerText = ">F>i>n>i>s>h>";
            contain2.appendChild(btn6);
            btn6.setAttribute("class" , "btn4");
            btn6.style.transform = "translateY(-12px)"
            btn6.style.visibility = "visible";
            btn6.style.color = "pink";
            // document.querySelector("main").style.backgroundColor = "pink";
            btn6.addEventListener('click', ()=>{
                location.reload();
           });
           
        });
      
        });

        
    }, 1000); 
});
   



   
  