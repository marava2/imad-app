var button = document.getElementById('counter');
 button.onclick = function(){
     // create a request object 
     // below is actually  done when we receive response from the request
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
        var counter = response.requestText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
        }
    }
    // Make a request
    //Below requests the counter 
};
    request.open('GET','http://madhusudhanarava9.imad.hasura-app.io/counter',true);
    request.send(null);
};
//Beow code for incrementing button function manually where using counter form server.js as webAPI now
//var button = document.getElementById('counter');
//var counter = 0;
// button.onclick = function(){
// make a req to counter
//capture response and store ina variable
//render variable to correct span
//counter = counter+1;
// var span = document.getElementById('count');
//span.innerHTML = counter.toString();
//};
