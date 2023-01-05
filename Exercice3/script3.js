/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste a interragir avec les element html a partir du fichier JS 
*/

/* =================== EXERCICE 3 ================*/

//1: Modifier l'Attribut navBar par socialNetworkNavigation

let VarDiv = document.getElementById("navBar");
VarDiv.setAttribute('id', "socialNetworkNavigation");

//2: Creer un noeud avec texte Deconnexion

let CreerLi = document.createElement('li');
let CreerNoeud = document.createTextNode('Deconnexion');

//3: Creer noeud li dans le noeud ul
let CreerUl = document.getElementsByTagName('ul')[0];
CreerUl.appendChild(CreerLi);

//4: Ajouer le noeud text au li creer
CreerLi.appendChild(CreerNoeud);

// 5 : Recuperer le Premier et le dernier li
let FirstLi = document.querySelector("li");
console.log(FirstLi.firstElementChild.innerHTML);
console.log(FirstLi.lastElementChild.innerHTML);

