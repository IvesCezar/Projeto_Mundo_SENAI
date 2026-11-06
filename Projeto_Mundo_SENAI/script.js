const URL_PLANILHA = "https://docs.google.com/spreadsheets/d/1LB_uW6GWwmWOPeESxoSyMwaoWzBQtLybZdMfqjSwNOM/edit?usp=sharing";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", function (event){
event.preventDefault(); //impede que a pagina recarregue ao enviar o formulario
aviso.textContent = "Se acalma moreno...";


})

