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



var submit = document.getElementById('submit_btn');
submit.onclick = function(){
var names = ['name1','name2','name3','name4'];
var list = '';
for (var i=0; i< names.length; i++ ) {
list += '<li>'+names[i] + '</li>';
}
 var ul =document.getElementById('namelist');
 ul.innerHTML = list;
};

//var nameInput = document.getElementById('name');
//var name = nameInput.value;
var submit1 = document.getElementById('submit_btn1');
submit1.onclick = function(){
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
        var names = request.responseText;
        names = JSON.parse(names);
var list = '';
for (var i=0; i< names.length; i++ ) {
list += '<li>'+names[i] + '</li>';
}
 var ul =document.getElementById('namelist');
 ul.innerHTML = list;
        }
    }
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
  request.open('GET','http://madhusudhanarava9.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};