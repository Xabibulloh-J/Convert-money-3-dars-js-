var elForm = document.querySelector(".js-form");
var elFormInput = elForm.querySelector(".js-input");
var elFormSelect = elForm.querySelector(".js-select");
var elFormButton = elForm.querySelector(".js-btn");
var elOutput = document.querySelector(".js-output");

elForm.addEventListener("submit", function(evt){
   evt.preventDefault();
   var inputValue = Number(elFormInput.value);
   var selectValue = Number(elFormSelect.value);
   var convertMoney = inputValue * selectValue;
   elOutput.textContent = `${convertMoney}`;


})