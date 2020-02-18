'use strict';


let stringInput = "";

// GUI SETUP
//Clear text areas
const clearTextAreas = () =>{
  document.getElementById("stringInput").value = "";
  document.getElementById("translateOutput").value = "";
}

const countBtnClick = () =>{
  stringInput = document.getElementById('stringInput').value;
  letterCount(stringInput);
  printResult();

  
  // STOPS FORM RELOAD
  event.preventDefault()
}

var counts = {};
var ch, index, len, count;

const letterCount = (sentence) => {
	
  // let testPhrase = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

  sentence = sentence.toLowerCase();
  // const test = testPhrase.split("");

  for (index = 0, len = sentence.length ; index < len; ++index){
    ch = sentence.charAt(index);

    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;

  }
}

var printObj = function(obj) { 
  var string = '';  
  for(var prop in obj) { 
    if (obj[prop] >= 1){
    string+= "  " + prop + " : " + obj[prop] + "  " ; 
    }
  } 
      return string; 
} 

function printResult() {  
      document.getElementById("letterCount").innerHTML = printObj(counts); 
} 


