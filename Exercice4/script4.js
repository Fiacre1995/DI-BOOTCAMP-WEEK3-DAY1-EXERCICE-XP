/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste a interragir avec les element html a partir du fichier JS 
*/

/* =================== EXERCICE 4 ================*/

//1:Creation de Tableau d'objets

let Tableau = [
    {
        Titre: "Rebelle",
        Auteur: "Fatou Keita",
        image: "https://image.jpg",
        déjàRead: true,
    },
    {
        Titre: "Soleil des Independances",
        Auteur: " Amadou Kourouma",
        image: "https://image2.jpg",
        déjàRead: false,
    }
] 

//2 : Creation d'un tableau

let DivBody = document.getElementsByTagName("div")[0];
let Tableau1 = document.createElement("table");
DivBody.appendChild(Tableau1);

let DivTable = document.getElementsByTagName("table")[0];
let Tr = document.createElement("tr"); 
DivTable.appendChild(Tr);

let DivTr = document.getElementsByTagName("tr")[0];
let Td = document.createElement("td"); 
DivTr.appendChild(Td);

let Td1 = document.createElement("td"); 
DivTr.appendChild(Td1);

let Td2 = document.createElement("td"); 
DivTr.appendChild(Td2);
let Image = document.getElementsByTagName("td")[2];

let Td3 = document.createElement("td"); 
DivTr.appendChild(Td3);

//3 : Ajouter des elements dans le tableau

document.getElementsByTagName("td")[0].innerHTML = Tableau[0].Titre;
document.getElementsByTagName("td")[1].innerHTML = Tableau[0].Auteur;
document.getElementsByTagName("td")[2].innerHTML = Tableau[0].image;
document.getElementsByTagName("td")[3].innerHTML = Tableau[0].déjàRead;

//4 : Ajouter une bordure au tableau et une largeur
DivTable.style.border = '2px solid red';
Image.style.heigth = '100px';

//5 : Si le livre est déja lu alors afficher un background rouge au tableau
if( Tableau[0].déjàRead == true){
    DivTable.style.backgroundColor = 'red';
}
