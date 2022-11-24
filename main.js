window.addEventListener("DOMContentLoaded", function(event){
});
document.addEventListener("wheel", function(event){

});
let section1 = document.getElementById("red");
let section2 = document.getElementById("orange");
let section3 = document.getElementById("yellow");
let section4 = document.getElementById("green");
let section5 = document.getElementById("blue");
let section6 = document.getElementById("purple");
let position1 = section2.getBoundingClientRect().top;
let sections =document.querySelectorAll("body > main >section");
console.log(position1);
for (let i=0;i<sections.length;i++) 
    {
        sections[i].addEventListener("wheel", function(event){

    if(event.deltaY > 0) // je vais vers le bas
    {
        let currentScrollPosition = document.documentElement.scrollTop;
        let positionToGo = position1 ;
        scroll(0, positionToGo);
    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
    
    }
});
    }











function getNextSection(current)
{
    if (current.id==="red")
    {
        return section2
    }
}
