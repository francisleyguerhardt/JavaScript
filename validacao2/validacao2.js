/**
 * Validação de Formulário com uso de plugin JQuerty
 * @author Francisley Guerhardt
 */

 $(document).ready(function(){
    $('#frmCadastro').validate({
        rules:{
            nome:{
                required:true,
                minlength: 4
            },
            email:{
                required: true,
                email: true
            },
            senha:{
                required: true,
                minlength: 8
            },
            senhaConfirmacao:{
                required: true,
                equalTo: senha,
                minlength: 8
            },
            termos:{
                required:true
            }
        },
        messages:{
            nome:{
                required:" Campo Obrigatório",
                minlength: " O campo nome deve ter no mínimo 4 caracteres"
            },
            email:{
                required: " O campo E-mail é obrigatório",
                email: " Email inválido"
            },
            senha:{
                required: " Campo  obrigatório",
                minlength: " Senha deve ter no mínimo 8 caracteres"
            },
            senhaConfirmacao:{
                required: " Campo  obrigatório",
                equalTo: " As senhas digitadas não são iguais"
            },
            termos:{
                required: " Para se cadastrar é necessário aceitar os termos"
            }
        }
    })
 })