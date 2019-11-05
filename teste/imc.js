/**
 * IMC
 * @author Francisley Guerhardt
 */
let peso, altura, IMC

function calcular() {
    peso = Number(frmIMC.txtPeso.value.replace(",","."))
    altura = Number(frmIMC.txtAltura.value.replace(",","."))
    IMC = peso / (altura*altura)
    frmIMC.txtResultado.value = IMC.toFixed(2)
}