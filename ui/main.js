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