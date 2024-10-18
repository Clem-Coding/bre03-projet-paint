/**************************************************************/
/*                         Données                            */
/**************************************************************/


let divHeader = document.querySelectorAll('header > div');
let divMain = document.querySelectorAll('main > div > div');

let colorPickers = document.querySelectorAll(".js-color-picker")



console.log('les div du header', divHeader);
console.log('les div du main', divMain);




// let colorPicker = document.querySelector('js-color-picker')
// console.log ("color picker",colorPicker.value)

/**************************************************************/
/*                         Fonctions                            */
/**************************************************************/



// ________Fonctions pour modifier les couleurs avec le color Picker____________

function getColorWithColorPicker() {
    // console.log("test fonction add color picker")
    // console.log("les color pickers", colorPickers)

    const colorsArray = [];
    for (let i = 0; i < colorPickers.length; i++) {
        colorsArray.push(colorPickers[i].value)

    }

    return colorsArray

}



function applyColorToBoxes(event){


    let colorPickerValues = getColorWithColorPicker()

    for (let i = 0; i < colorPickerValues.length; i++) {
       if (divHeader[i]){
           divHeader[i].style.backgroundColor = colorPickerValues[i];
       }
    }
}


function selectColor(event) {

    // console.log("je clique sur une div header");

    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}



function getSelectedColor() {

    if (sessionStorage.getItem("selectedColor")) {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}



function loadPalette(palette) {
    console.log("la fonction loadPalette est appelée")
    for (let i = 0; i < palette.length; i++) {
        divHeader[i].style.backgroundColor = palette[i];
    }
}


function loadSelectedColor(event) {


    let selectedCell = event.target;
    let color = getSelectedColor();



    if (selectedCell.style.backgroundColor) {
        selectedCell.style.backgroundColor = '';

    }
    else {
        selectedCell.style.backgroundColor = color;

    }
}



/************************************************************/
/*                      Event listeners                       */
/**************************************************************/







/************************************************************/
/*                      Main Programm                      */
/**************************************************************/



window.addEventListener("DOMContentLoaded", function() {
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#000000", "#8b4513", "#0000ff", "#800080", "#ff0000", "#ffdead", "#808080", "#ff6347"])
    //  )
    ;

    divHeader.forEach(div => {
        div.addEventListener('click', selectColor)
    })



    divMain.forEach(cell => {
        cell.addEventListener('click', loadSelectedColor)
    })

    // le code de l'étape 2 se passe ici

    // le code de l'étape 3 se passe ici


    getColorWithColorPicker()

    colorPickers.forEach(picker => {
        picker.addEventListener("input", applyColorToBoxes)
    })


});
