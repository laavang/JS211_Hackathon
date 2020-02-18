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

const pigInput =(testPhrase) => {
	
  // let testPhrase = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

  const test = testPhrase.split("");

  var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i= 0, j= 0, k= 0, l= 0, m= 0, n= 0, o= 0, p= 0, q= 0, r= 0, s= 0, t= 0, u= 0, v= 0, w= 0, x= 0, y= 0, z = 0;

  // console.log (test);

let letterFrequencies = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (letter of test){
    switch (letter){
      case "a":
      letterFrequencies.a = a++
      break;
      case "b":
      letterFrequencies.b = b++
      break;
      case "c":
      letterFrequencies.c = c++
      break;
      case "d":
      letterFrequencies.d = d++
      break;
      case "e":
      letterFrequencies.e = e++
      break;
      case "f":
      letterFrequencies.f = f++
      break;
      case "g":
      letterFrequencies.g = g++
      break;
      case "h":
      letterFrequencies.h = h++
      break;
      case "i":
      letterFrequencies.i = i++
      break;
      case "j":
      letterFrequencies.j = j++
      break;
      case "k":
      letterFrequencies.k = k++
      break;
      case "l":
      letterFrequencies.l = l++
      break;
      case "m":
      letterFrequencies.m = m++
      break;
      case "n":
      letterFrequencies.n = n++
      break;
      case "o":
      letterFrequencies.o = o++
      break;
      case "p":
      letterFrequencies.p = p++
      break;
      case "q":
      letterFrequencies.q = q++
      break;
      case "r":
      letterFrequencies.r = r++
      break;
      case "s":
      letterFrequencies.s = s++
      break;
      case "t":
      letterFrequencies.t = t++
      break;
      case "u":
      letterFrequencies.u = u++
      break;
      case "v":
      letterFrequencies.v = v++
      break;
      case "w":
      letterFrequencies.w = w++
      break;
      case "x":
      letterFrequencies.x = x++
      break;
      case "y":
      letterFrequencies.y = y++
      break;
      case "z":
      letterFrequencies.z = z++
      break;
      }
  }

console.log("Letters and how often they show up:")
for (let [key, value] of Object.entries(letterFrequencies)) {
  if (value !== 0) {
    console.log(`${key}: ${value}`);
  }
}; 
}