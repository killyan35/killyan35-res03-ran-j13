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
let position1 = section1.getBoundingClientRect().top;
let position2 = section2.getBoundingClientRect().top;
let position3 = section3.getBoundingClientRect().top;
let position4 = section4.getBoundingClientRect().top;
let position5 = section5.getBoundingClientRect().top;
let position6 = section6.getBoundingClientRect().top;
let sections =document.querySelectorAll("body > main >section");

function getNextSection(current)
{
    if (current.id==="red")
    {
        return document.getElementById("orange");
    }
    else if (current.id==="orange")
    {
        return document.getElementById("yellow");
    }
    else if (current.id==="yellow")
    {
        return document.getElementById("green");
    }
    else if (current.id==="green")
    {
        return document.getElementById("blue");
    }
    else if (current.id==="blue")
    {
        return document.getElementById("purple");
    }
}
function getPreviewSection(current)
{
    if (current.id==="purple")
    {
        return document.getElementById("blue");
    }
    else if (current.id==="blue")
    {
        return document.getElementById("green");
    }
    else if (current.id==="green")
    {
        return document.getElementById("yellow");
    }
    else if (current.id==="yellow")
    {
        return document.getElementById("orange");
    }
    else if (current.id==="orange")
    {
        return document.getElementById("red");
    }
}

for (let i=0;i<sections.length;i++) 
    {
        sections[i].addEventListener("wheel", function(event){

    if(event.deltaY > 0) // je vais vers le bas
    {
        let currentScrollPosition = document.documentElement.scrollTop;
        let positionToGo = getNextSection(currentScrollPosition+1) ;
        scroll(0, positionToGo);
    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
        let currentScrollPosition = document.documentElement.scrollTop;
        let positionToGo = getPreviewSection(currentScrollPosition-1) ;
        scroll(0, positionToGo);
    }
    
});}












