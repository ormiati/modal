'use strict'

let modal = document.getElementById("Modal");

let btn = document.getElementById("Btn");

let span = document.getElementsByClassName("close")[0];

let btngreen = document.getElementsByClassName("btn-green")[0];

let btnred = document.getElementsByClassName("btn-red")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

btngreen.onclick = function() {
    modal.style.display = 'none';
}

btnred.onclick = function() {
    modal.style.display = 'none';
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}