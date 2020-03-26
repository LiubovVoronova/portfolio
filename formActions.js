"use strict"
// RANGE
let inputLine = document.querySelector('input[type="range"]');
let value = document.querySelector('.value');

inputLine.addEventListener("input", showValue, false);

function showValue() {
    value.innerHTML = inputLine.value;
    let numberPosition = inputLine.value / 5;
    value.style.left = (numberPosition * 290) + "px";
}

// POPUP
class Popup {
    constructor() {
        this.modal = document.querySelector('.modal');       
        this.overlay = document.querySelector('.overlay'); 
        this.closeSymbol = document.querySelector('.close');    
        let popup = this;
        this.overlay.onclick = function() {
            popup.closeWindow();
        }
        this.closeSymbol.onclick = function() {
            popup.closeWindow();
        }
    }    
    open(content) {
        this.overlay.classList.add('open');
        this.modal.classList.add('open');
        this.modal.querySelector('.modal-content').appendChild(content);              
    }
    closeWindow() {
        this.overlay.classList.remove('open');
        this.modal.classList.remove('open');
        this.modal.querySelector('img').remove();
    }    
}

let card = new Popup();
let animal;
let amount;
let goodMoodResult = document.getElementById('goodMood'); 
goodMoodResult.addEventListener("submit", function(evt) {      
    evt.preventDefault();       
    let whichAnimal = document.querySelectorAll('input[type="radio"]');
    
    for (let i = 0; i < whichAnimal.length; i++) {
       if(whichAnimal[i].checked) {     
          animal = whichAnimal[i].value;   
       }   
    }
    amount = inputLine.value;
    card.open(createPicture());
});

function createPicture() {
    let picture = document.createElement('img');  
    picture.classList.add('card-picture');
    if (amount == '0') {
        picture.src = 'images/raccoon.jpg';
    } else {
        if(animal == 'dog') {
            switch(amount) {
                case '1':
                    picture.src = "images/dog.jpg";
                    break;
                case '2':
                    picture.src = "images/dogs2.jpg";
                    break;
                case '3':
                    picture.src = "images/dogs3.jpg";
                    break;
                case '4':
                    picture.src = "images/dogs4.jpg";
                    break;
                case '5':
                    picture.src = "images/dogs5.jpg";
                    break;
            }
        } else {
            switch(amount) {
                case '1':
                    picture.src = "images/cat.jpg";
                    break;
                case '2':
                    picture.src = "images/cats2.jpg";
                    break;
                case '3':
                    picture.src = "images/cats3.jpg";
                    break;
                case '4':
                    picture.src = "images/cats4.jpg";
                    break;
                case '5':
                    picture.src = "images/cats5.jpg";
                    break;
            }
        }
    }      
    return picture;    
}
 