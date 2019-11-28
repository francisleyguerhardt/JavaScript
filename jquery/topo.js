/**
 * Função JQuery Voltar ao Topo
 * @author Francisley Guerhardt
 */

$(document).ready(function(){
    // .click(function(){}); -> quando clicar no objeto identificado pella id .Top
    $('#top').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow')
    })
})