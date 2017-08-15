var button = document.getElementById('counter');
var counter = 0;
 button.onclick = function(){
// make a req to counter
//capture response and store ina variable
//render variable to correct span
counter = counter+1;
 var span = document.getElementById('count');
span.innerHTML = counter.toString();
};
