/**
 * Menu responsivo usando JQuery
 * @author Francisley Guerhardt
 */

$(document).ready(function (){
    $('.Hamburguer').click(function(){
        $('.Menu ul').slideToggle()
    })
    // Função abaixo resolve o problema de "sumir" o menu mobile -> desktop
    $(window).resize(function(){
        if($(window).width() >= 480){
            $('.Menu ul').removeAttr('style')
        }
    })
})