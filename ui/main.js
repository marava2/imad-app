console.log('Loaded!');
alert ('Hi, am serverside scripting');
var element = document.getElementById('main-text');
element.innerHTML = 'new Value';
var img = document.getElementById('madi');
img.onclick = function () {
img.style.marginLeft = '100px'; };

// entire code below is for authenticating the user
var submit = document.getElementById('submitbtn');
 submit.onclick = function(){
     // create a request object 
     // below is actually  done when we receive response from the request
var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){console.log('user logged in');
            alert('Logged in successfully');
        }
        else if (request.status===403){
            alert('username / password is invalid');
        }
        else if (request.status===500){
            alert('something went wrong on the server');
        }
        }
};
};
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
console.log(username);
console.log(password);
 request.open('POST','http://madhusudhanarava9.imad.hasura-app.io/login',true);
 request.setRequestHeader('Content-Type','application/json');
 request.send(JSON.stringify({username : username, password: password }));