//JavaScript

$(document).ready(function(e){
document.addEventListener("deviceready",function(){

$('#beeb').tap(function)(){
navigator.notification.beep(1);
});//tap beep

$('#vibrar').tap(function(){
navigation.notification.vibrate(1000);
});//tap vibrar

},false); //deviceready
})//ready