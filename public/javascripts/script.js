const btnMenu = document.getElementById('btn-menu');
const sidebar = document.getElementById('sidebar');

// Click event to alternate the class "hidden"
btnMenu.addEventListener('click', function(){
    sidebar.classList.toggle('hidden');
});  

// content modal Metas Financeiras
var btn_modal = document.querySelector("#btn_open_modalMF");

btn_modal.addEventListener("click", () => {
    dialogMF.showModal("open", true)
})

cancelMF.addEventListener("click", () => {
    dialogMF.close();
})

// content modal Gastos
var btn_modal = document.querySelector("#btn_open_modalG");

btn_modal.addEventListener("click", () => {
    dialogG.showModal("open", true)
})

cancelG.addEventListener("click", () => {
    dialogG.close();
})

// content modal Recebimentos
var btn_modal = document.querySelector("#btn_open_modalR");

btn_modal.addEventListener("click", () => {
    dialogR.showModal("open", true)
})

cancelR.addEventListener("click", () => {
    dialogR.close();
})

// content modal investimentos
var btn_modal = document.querySelector("#btn_open_modalI");

btn_modal.addEventListener("click", () => {
    dialogI.showModal("open", true)
})

cancelI.addEventListener("click", () => {
    dialogI.close();
})



