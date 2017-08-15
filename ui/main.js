console.log('Loaded!');
var button = document.getElementById('counter');
var element = document.getElementById('main-text');
element.innerHTML = 'new Value';
var img = document.getElementById('madi');
img.onclick = function () {
img.style.marginLeft = '100px'; };
var counter = 0;
 button.onclick = function(){
// make a req to counter
//capture response and store ina variable
//render variable to correct span
counter = counter+1;
 var span = document.getElementById('count');
span.innerHTML = counter.toString();
};