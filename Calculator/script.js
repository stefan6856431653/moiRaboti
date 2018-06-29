 var  num1 = document.getElementById('myInput1'). value;
      num1 = parseInt(num1);
function plus() {
	var num1;
	num1 = document.getElementById('myInput1'). value;
	num1 = parseInt(num1);
   document.getElementById("myInput1").value += '+';
}
function minus() {
   document.getElementById("myInput1").value += '-';
}
function razd() {
    document.getElementById("myInput1").value += '/';
}
function umn() {
   document.getElementById("myInput1").value += '*';
}
function rez(){
 var ravno = document.getElementById('myInput1').value;
     document.getElementById("myInput1").value = eval(ravno);
}
function cor(){
 var ravno = document.getElementById('myInput1').value;
     document.getElementById("myInput1").value = Math.sqrt(eval(ravno));
    
}
function c(){
   input1.value = '';
}


var input1 = document.getElementById('myInput1');
var btn1 = document.getElementById('myButton1');
btn1.onclick = function() {
    input1.value += '1';
}
var input1 = document.getElementById('myInput1');
var btn10 = document.getElementById('myButton.');
btn10.onclick = function() {
    input1.value += '.';
}

var input2 = document.getElementById('myInput1');
var btn = document.getElementById('myButton2');
btn.onclick = function() {
    input1.value += '2';
}

var input3 = document.getElementById('myInput1');
var btn = document.getElementById('myButton3');
btn.onclick = function() {
    input1.value += '3';
}

var input4 = document.getElementById('myInput1');
var btn = document.getElementById('myButton4');
btn.onclick = function() {
    input1.value += '4';
}

var input5 = document.getElementById('myInput1');
var btn = document.getElementById('myButton5');
btn.onclick = function() {
    input1.value += '5';
}

var input6 = document.getElementById('myInput1');
var btn = document.getElementById('myButton6');
btn.onclick = function() {
    input1.value += '6';
}

var input7 = document.getElementById('myInput1');
var btn = document.getElementById('myButton7');
btn.onclick = function() {
    input1.value += '7';
}

var input8 = document.getElementById('myInput1');
var btn = document.getElementById('myButton8');
btn.onclick = function() {
    input1.value += '8';
}

var input9 = document.getElementById('myInput1');
var btn = document.getElementById('myButton9');
btn.onclick = function() {
    input1.value += '9';
}

var input0 = document.getElementById('myInput1');
var btn = document.getElementById('myButton0');
btn.onclick = function() {
    input1.value += '0';
}