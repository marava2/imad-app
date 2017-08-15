var button = document.getElementById('counter');
 button.onclick = function(){
     // create a request object 
     // below is actually  done when we receive response from the request
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
        var counter = request.responseText;
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


