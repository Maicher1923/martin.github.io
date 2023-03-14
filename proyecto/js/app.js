const sobremí=document.getElementById("sobremí");
const parte2=document.getElementById("parte2");
const volver=document.getElementById("volver");

sobremí.addEventListener("click", ()=>{
    parte2.classList.add("entrar")
});
volver.addEventListener("click", ()=>{
    parte2.classList.remove("entrar")
});