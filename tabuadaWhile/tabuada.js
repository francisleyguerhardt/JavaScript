/**
 * Tabuada usando a estrutura While
 * @author Francisley Guerhardt
 */

let i = 1
let j = 1

while (i <= 10) {
    document.write('<p> Tabuada do ' + i + '</p>')
    while (j <= 10) {
        document.write('<p>' + i + ' x ' + j + ' = ' + (i * j) + '</p>')
        j++
    }
    i++
    j = 1 // no segundo laço  while, o valor de j é 11 (saída do laço)
}