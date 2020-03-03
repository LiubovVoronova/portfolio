"use strict"

// MENU-DROPDOWN
document.addEventListener('click', function(event) {
    let target = event.target; 
    let subMenuList = document.querySelectorAll('ul.sub-menu');    
    if (target.closest('.menu-item')) {
        closeMenu();
        target.querySelector('ul.sub-menu').style.visibility = "visible";
        } else {
            closeMenu();
        }
    function closeMenu() {
        for (let i = 0; i < subMenuList.length; i++) {
            subMenuList[i].style.visibility = "hidden";
        }
    }    
});
