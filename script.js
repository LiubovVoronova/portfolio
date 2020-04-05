"use strict"

// MENU-DROPDOWN
document.addEventListener('click', function(event) {
    let target = event.target;     
    let subMenuList = document.querySelectorAll('ul.sub-menu'); 
    let menuItemList = document.querySelectorAll('.menu-item');                  
    if (target.closest('.menu-item') && target.classList.contains('arrow-down')) {
        closeMenu();
        target.querySelector('ul.sub-menu').style.visibility = "visible";        
        target.classList.toggle("arrow-down");
        target.classList.toggle("arrow-up");
        } else {
            closeMenu();
        }
    function closeMenu() {
        for (let i = 0; i < subMenuList.length; i++) {
            subMenuList[i].style.visibility = "hidden";                   
        }    
        for (let j=0; j < menuItemList.length; j++) {  
            if(menuItemList[j].classList.contains('arrow-up')) {
                menuItemList[j].classList.toggle("arrow-up"); 
                menuItemList[j].classList.toggle("arrow-down");
            }          
                                          
        }   
        
    }    
});

// CLOCK
let clockContainer = document.querySelector('.clock');
function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = date.getSeconds();    
    if (seconds < 10) seconds = "0" + hours; 
    clockContainer.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
    
// }

let time;
function startClock() {
    time = setInterval(updateClock, 1000);
    updateClock();
}
function stopClock() {
    clearInterval(time);
}

startClock();

let go = clockContainer.querySelector('.go');
go.onclick = startClock;
let stopCl = clockContainer.querySelector('.stop');
stopCl.onclick = stopClock;
