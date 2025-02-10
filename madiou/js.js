//! Téléchargez l'extension "Better Comments" pour mieux le lire
//! Avec W3 Schools et quelques recherches, vous pouvez tout résoudre
// Utilisation des variables, tableaux et fonctions :

//* Les commentaires avec cet astérisque au début indiquent les concepts qui vous aideront à atteindre l'objectif.

// 1
//! Créez une alerte qui s'affiche en appuyant sur le bouton avec un message : "hello world".

//* id ou classe
//* alert
//* getElementBy... 
//* événements (addEventListener)
//* savoir que vous pouvez exécuter des fonctions sans avoir besoin d'un return
//* (Ce n'est pas nécessaire, mais le concept de fonction fléchée "arrow function" peut rendre votre code plus court.)
const h = "hello world";
const button = document.getElementById("myButton");

button.addEventListener("click", () => {  
    alert(h);
});


// 2

//! Il existe plusieurs façons de comprendre cette tâche, vous pourriez simplement écrire les données en dur dans le code.
//! Par exemple, vous pourriez écrire les données comme ceci :
//! Vous pouvez copier cela dans la console de Chrome ou Firefox : 
//*? console.log("Nom : Johny Deep, Âge : 50, Travail : Acteur");
//! mais cela n'est pas logique. Normalement, vous créerez des variables qui devront ensuite être remplies avec des données ou des instructions. 
//! Nous allons donc créer des variables qui contiennent ces données.

//* Vous pouvez le faire avec des variables simples (const name = "Johny Deep"), par exemple. 
//* Ou vous pourriez le faire de manière plus complexe, semblable à ce que vous ferez à l'avenir, avec un objet. 
//* Vous pouvez effectuer des "opérations" avec des chaînes de caractères. Regardez l'utilisation des opérateurs avec les chaînes.
//? const madiou = {
//? hauteur: "2 mètres"
//? }
const Data ={
    Nom: "Johny Deep",
    Age: 50,
    Travail: "Acteur"
};
document.getElementById("myData").addEventListener("click", () => {
    alert(`Nom : ${Data.Nom}, Age : ${Data.Age}, Travail : ${Data.Travail}`);
    
});


 
//  3
//! Normalement, les informations que nous allons traiter seront envoyées via des formulaires et des fetchs (requêtes).  
//! Quand nous serons sur React, nous parlerons davantage des fetchs.  
//! Pour l'instant, vous allez essayer de récupérer les données des champs de saisie et, en appuyant sur le bouton final, 
//! afficher une alerte exactement comme avant.

//* Si vous ne vous souvenez pas du concept de submit dans un élément HTML, je vous recommande de le revoir.
//* addEventListener a plus d'options que "click".
//* Utilisez le concept d'objet si vous vous en sentez capable. 
const form = document.getElementById("myFormData");
form.addEventListener("submit", () => {
    const name = document.getElementById("myName").value;
    const age = document.getElementById("myAge").value;
    const job = document.getElementById("myJob").value;
    alert(`Nom : ${name}, Age : ${age}, Travail : ${job}`);
});


// 4

//! Avant, vous créiez des variables pour les insérer directement dans l'alerte. Maintenant, vous allez faire quelque chose de similaire.
//! Je veux que vous créiez un tableau qui contienne les valeurs des champs de saisie et qu'elles soient affichées dans le bon ordre.
const from2 = document.getElementById("myArrayData");

from2.addEventListener("submit", () => { 
    const array = [ 
         document.getElementById("fourthName").value,
         document.getElementById("thirdName").value, 
         document.getElementById("firstName").value,
         document.getElementById("secondName").value
        ];
    alert(`${array[2]}  ${array[3]}  ${array[1]}  ${array[0]}`);
});
