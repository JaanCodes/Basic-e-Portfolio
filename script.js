var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow >= 6 && hourNow <= 12){
    greeting = 'Good morning!'
}
else if(hourNow >= 15 && hourNow <= 19){
    greeting = 'Good afternoon!'
}
else if(hourNow >= 20 && hourNow <= 22){
    greeting = 'Good evening!'
}
else if(hourNow > 22 && hourNow <= 23){
    greeting = 'Good night!'
}
else{
    greeting = 'Welcome!'
}

document.getElementById('welcome').innerHTML = greeting



let contrastToggle = false
function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark--theme"
    }
    else{
        document.body.classList.remove("dark--theme")
    }
}