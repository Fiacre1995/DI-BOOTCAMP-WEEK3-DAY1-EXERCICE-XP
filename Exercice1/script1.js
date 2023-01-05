/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste a interragir avec les element html a partir du fichier JS 
*/
/* =================== EXERCICE 1 ================*/

//1: Selectionner le div et y  Appliquer un console.log

let VarDiv = document.getElementById("container");
console.log(VarDiv);

//2: Modifier le nom Pete par Richard
document.getElementsByTagName("li")[1].innerHTML = "Richard";

//3: Remplacer les premiers li par mon nom 

let change = document.querySelectorAll('li:first-child');
for(let i of change){
    i.innerHTML = "DION";
}

//4:Supprimer le li contenant Sarah
let Sarah = document.getElementsByTagName("li")[3];
Sarah.remove();


//4:Ajouter la classe 'student_list' aux elements ul

let VariableUl = document.querySelectorAll("ul");
for(let choix of VariableUl){
    choix.classList.add("student_list");
}

//4:Ajouter les classe 'university' et 'attendance' aux premier ul
let VariableUl1 = document.getElementsByTagName("ul")[0];
    VariableUl1.classList.add("university","attendance");


