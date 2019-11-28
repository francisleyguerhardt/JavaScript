/**
 * Efeito Fade para destacar uma Imagem
 * Exemplo de uso de Funções JQuery se comportando como if else
 * @author Francisley Guerhardt
 */

 $(document).ready(function(){
     $('ul.Destaque li img').hover (function(){
        $('ul.Destaque li img').not(this).stop().fadeTo(400,0.3) //(milisegundos,opacidade(0 a 1))

     },function (){
        $('ul.Destaque li img').stop().fadeTo(400,1)
     })
})