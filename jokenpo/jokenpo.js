/**
 * JoKenPô - PEDRA PAPEL TESOURA
 * @author Francisley Guerhardt
 */

function jogar() {
    let sorteio = Math.floor(Math.random() * 3)
    switch (sorteio) {
        case 0:
            document.getElementById('pc').src = 'pcpedra.png'
            break
        case 1:
            document.getElementById('pc').src = 'pcpapel.png'
            break
        case 2:
            document.getElementById('pc').src = 'pctesoura.png'
            break
    }
    if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2))
        document.getElementById('resultado').innerText = 'EMPATE'
    else if ((document.getElementById('pedra').checked == true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1))
        document.getElementById('resultado').innerText = 'JOGADOR GANHOU'
    else if ((document.getElementById('tesoura').checked === true && sorteio === 0) || (document.getElementById('pedra').checked === true && sorteio === 1) || (document.getElementById('papel').checked === true && sorteio === 2))
        document.getElementById('resultado').innerText = 'COMPUTADOR GANHOU'
}

function resetar() {
    document.getElementById('pc').src = 'pc.png'
    document.getElementById('resultado').innerText = ''
}
