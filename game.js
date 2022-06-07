// var character = document.getElementById("character");
// var block = document.getElementById("block");
// function jump(){
//     if(character.classList !="animate"){
//     character.classList.add("animate");
//     }
//     setTimeout(function(){
//         character.classList.remove("animate");
//     },500);
// }
// var checkDead = setInterval(function(){
//     var characterTop =
//     parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     var blockLeft =
//     parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if (blockLeft<20 && blockLeft>0 %% characterTop>=130)
//     block.style.animation = "none"
//     block.style.display = "none"
//     alert("you lose.")
// },10);

var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener("animationiteration",() => {
    var ramdom = -((Math.random()*300)+200);
    var top = (random*100)+200;
    hole.style.top = -(top) + "px";
    counter++;
    // counter++;
});
setInterval(function (){
    var characterTop = 
    parseInt (window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping==0) {
        character.style.top = (characterTop-5)+"px";
    }
    var blockLeft = 
    parseInt (window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = 
    parseInt (window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(100-characterTop)
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game Over. score: "+counter);
        character.style.top = 100 + "px";
        counter = 0;
        // counter = 1;
    } 
},10);
function jump () {
    jumping = 0;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        let characterTop =
         parseInt (window.getComputedStyle(character).getPropertyValue("top"));
         if ((characterTop>6)&&(counter<15)) {
            character.style.top = (characterTop-5)+"px";   
         }
         if (jumpCount>20) {
             clearInterval(jumpInterval)
             jumping = 0;
             jumpCount = 0;
         }
        jumpCount++;
        // jumpCount++;

    },10);
}









