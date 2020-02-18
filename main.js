'use strict';


let input = "";
let pigInput = "";

// GUI SETUP
//Clear text areas
const clearTextAreas = () =>{
  document.getElementById("translateInput").value = "";
  document.getElementById("translateOutput").value = "";
}

const translateBtnClick = () =>{
  pigInput = document.getElementById('translateInput').value;
  pigLatin(pigInput);
  
  // STOPS FORM RELOAD
  event.preventDefault()
}

const string = (input) => {


  //Print the latin array as a string without ,'s
  let result = latinSentence.join(" ");
  document.getElementById("translateOutput").value = result;

}

