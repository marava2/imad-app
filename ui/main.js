var submit = document.getElementById('submitbtn');
 submit.onclick = function(){
     // create a request object 
     // below is actually  done when we receive response from the request
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
         }
}
};
console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'new Value';
var img = document.getElementById('madi');
img.onclick = function () {
img.style.marginLeft = '100px'; };
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
console.log(username);
console.log(password);
 request.open('POST','http://madhusudhanarava9.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username : username, password: password }));