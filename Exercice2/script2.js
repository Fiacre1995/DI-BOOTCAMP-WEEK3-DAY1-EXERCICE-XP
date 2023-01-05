/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste a interragir avec les element html a partir du fichier JS 
*/

/* =================== EXERCICE 2 ================*/

//1: Ajouter une couleur d'arriere blan bleu clair et un peu de rembourage au div

let VariableDiv = document.getElementsByTagName("div");
CouleurDiv = VariableDiv[0].style.backgroundColor = "blue";
VariableDiv[0].style.padding = "50px";

//2: Ne pas afficher le li contenant John

let John = document.getElementsByTagName("li")[0];
John.style.display = "none";

//3: Ajouter une bordure au li contenant Pete

let Pete = document.getElementsByTagName("li")[0];
Pete.style.border = '2px solid red';

//3: Ajouter la taille de police de tout le corp 

let VariableBody = document.getElementsByTagName("body");
VariableBody[0].style.fontSize = '50px'; 

//4: Si la couleur de fond est bleu alors afficher alert 

if(CouleurDiv == "blue"){
    alert("Bonjour " + Pete.innerHTML + " et " + John.innerHTML);
}else {
    alert("Au revoir ");
};