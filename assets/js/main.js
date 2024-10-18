/**************************************************************/
/*                         Données                         */
/**************************************************************/


let divHeader = document.querySelectorAll('header > div');
let divMain = document.querySelectorAll('main > div > div');
let colorPickers = document.querySelectorAll('.js-color-picker');

console.log("les pickers", colorPickers)




/**************************************************************/
/*                         Fonctions                            */
/**************************************************************/



// _____Fonction pour loader les couleurs par défaut au chargement de la page___

function loadPalette(palette) {

    for (let i = 0; i < palette.length; i++) {
        colorPickers[i].value = palette[i];
    }
}




// ____________________ Fonctions Local Storage _______________________________
function selectColor(event) {

    let colorPalette = event.target;
    console.log("colorPalette", colorPalette)

    let selectedColor = colorPalette.value; // Récupère la valeur sélectionnée
    console.log("selected color", selectedColor)
    sessionStorage.setItem("selectedColor", selectedColor); // Stocke la couleur dans sessionStorage

}

function getSelectedColor() {

    if (sessionStorage.getItem("selectedColor")) {
        return sessionStorage.getItem("selectedColor");
    }
    return null; // Pourquoi null?
}






//_________ Fonction pour charger la couleur choisie dans la palette____________

function loadSelectedColor(event) {
    localStorage.clear() // à revoir, ne fonctionne pas
    console.log("je commence à colorier")
    let cellMain = event.target;
    let selectedColor = getSelectedColor();

    if (MouseDown) {
        console.log("ok pour le mousedow")
        cellMain.style.backgroundColor = selectedColor;
    }
}


//___________ Fonctions pour activer et désactiver le coloriage________________

let MouseDown = false

function colorOnCells() {
    console.log("j'ai la souris enfoncée")
    MouseDown = true
    

    divMain.forEach(div => {
        div.addEventListener("mouseover", loadSelectedColor)
    })
}


function stopColoring() {
    MouseDown = false
    console.log("je stoppe")

    divMain.forEach(div => {
        div.removeEventListener("mouseover", loadSelectedColor(event)) 
    })
}





/************************************************************/
/*                      Main Programm                      */
/**************************************************************/



window.addEventListener("DOMContentLoaded", function() {

    loadPalette([
        "#22f6f3",
        "#3daf7e",
        "#ffffff",
        "#ec8236",
        "#a9a7ee",
        "#ecc606",
        "#f783f2",
        "#e89e80",
        "#000000",
        "#8b4513",
        "#0000ff",
        "#800080",
        "#ff0000",
        "#ffdead",
        "#808080",
        "#ff6347"
    ]);



    colorPickers.forEach(input => {
        input.addEventListener('input', selectColor)
    })



    document.addEventListener("mousedown", colorOnCells);
    document.addEventListener("mouseup", stopColoring);


eraserButton.addEventListener()// à continuer

// A faire : 
// changer la taille de la grille
// enregistrer au format PNG
// + css
// idée : bouton image gomme avec bordure en surbrillance quand on clique dessus
// + bouton clear

});
