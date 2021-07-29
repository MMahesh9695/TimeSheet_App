var openPopup = document.querySelector('#btn_add');
var addButton = document.querySelector('#btn_submit');
var closeButton = document.querySelector('#spn_close');
var popupElement = document.querySelector('.timesheet_model_container');

openPopup.addEventListener('click',openTimeSheet);
addButton.addEventListener('click',addTimeSheet);
closeButton.addEventListener('click',closeTimeSheet);

function openTimeSheet(){
    popupElement.style.display = "block";
}

function closeTimeSheet(){
    popupElement.style.display = "none";
}

function addTimeSheet(){

}

function validation(){

}