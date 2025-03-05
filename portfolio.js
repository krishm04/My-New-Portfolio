const roles = ["Frontend developer","Web Developer"];
let i = 0;
function typeeffect(){
    document.getElementById("typing").textContent = roles[i];
    i = (i+1) % roles.length;
    setTimeout(typeeffect,2000);
}
typeeffect();