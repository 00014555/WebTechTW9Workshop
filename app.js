let breedsContainer=document.getElementById('breed-list');
let img = document.getElementById('img')

window.addEventListener('load', function() {
setBreeds();
});

function setBreeds () {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let breeds = Object.keys(data.message);
        
        breeds.forEach(function(breed) {
           let li = document.createElement('li');
           let a = document.createElement('a');

           li.setAttribute('class', 'breed-item');
           a.textContent = breed;  

           a.setAttribute('name', breed);

           a.addEventListener('click', function(event) {
             fetch(`https://dog.ceo/api/breed/${event.target.name}/images/random`)
             .then (function(response) {
                 return response.json();
             })
             .then (function(data) {
                 img.setAttribute('src', data.message);
             })
           });

           li.appendChild(a);

           breedsContainer.appendChild(li);
        });
    })
}