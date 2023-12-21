function Solve(val) {
    var v = document.getElementById('calci');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('calci').value;
    var num2 = eval(num1);
    document.getElementById('calci').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('calci');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('calci');
    ev.value = ev.value.slice(0,-1);
 }