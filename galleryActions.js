"use strict"
import {myClientId} from './master.js';

getPhotos('sky');
let photoContainer = document.querySelector('.big-photo-container');
let smallPhotoContainer = document.querySelector('.small-photo-container');

function getPhotos(searchWord) {
    fetch(`https://api.unsplash.com/search/photos?client_id=${myClientId}&query=${searchWord}&orientation=landscape`)
    .then(function(response) {
    if (response.ok) {        
        return response.json();        
        } else {
        console.log("Ошибка HTTP: " + response.status);
        }        
    })
    .then(function(myPictures) { 
        if (myPictures.total == '0') {
            let errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = "Ничего не найдено";
            photoContainer.append(errorMessage);
        }  else {            
            let Bigphoto = photoContainer.querySelector('.big-photo');      
            let bigImage = document.createElement('img');
            bigImage.classList.add('big-picture');   
            bigImage.src = myPictures.results[9].urls.regular;
            bigImage.alt = myPictures.results[9].alt_description;
            Bigphoto.append(bigImage);
            
            let smallPhotoCount = Math.floor(document.documentElement.clientWidth / 200);        
            
            for (let i=0; i < smallPhotoCount; i++) {
                let smallImage = document.createElement('img');
                smallImage.src = myPictures.results[i].urls.thumb;
                smallImage.alt = myPictures.results[i].alt_description;
                smallImage.classList.add('small');            
                smallPhotoContainer.append(smallImage);
            }  
            
            let smallPicures = document.querySelectorAll('.small');
            for (let i = 0; i < smallPicures.length; i++) {
                smallPicures[i].onclick = function() {
                    bigImage.src = myPictures.results[i].urls.regular;
                    bigImage.alt = myPictures.results[i].alt_description;
                }  
            }
        }
    });
}


function removePhotos() {
    let smallPicures = document.querySelectorAll('.small');
    if (smallPicures.length != 0) {
        photoContainer.querySelector('.big-picture').remove();    
        for (let i = 0; i < smallPicures.length; i++) {
            smallPicures[i].remove();
        }
    }    
}

let select = document.querySelector('select')
let categorie = select.value;
select.addEventListener("change", function() {
    categorie = select.value;    
})

let categorieSearch = document.getElementById('categories');
categorieSearch.addEventListener("submit", function(event) {      
    event.preventDefault();  
    removePhotos();
    getPhotos(categorie);
});

let wordSearch = document.getElementById('words');
let search = document.querySelector('input[type="search"]')

let searchResult;
search.addEventListener("input", function() {
    searchResult = search.value;
});
wordSearch.addEventListener("submit", function() {
    event.preventDefault();  
    removePhotos();    
    getPhotos(searchResult);        
});
