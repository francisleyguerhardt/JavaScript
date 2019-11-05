/**
 * Estudo dp DOM 
 * Estudo da Função com passagem de parâmetros
 * @author Francisley Guerhardt
 */
/*
//Sem passagem de parâmetros
function ligar() {
    document.getElementById('lamp').src='on.jpg'
}
function desligar() {
    document.getElementById('lamp').src='off.jpg'
}
*/

// Com passagem de parâmetros

let recebe

function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById('lamp').src = 'on.jpg'

    } else {
        document.getElementById('lamp').src = 'off.jpg'
    }
}