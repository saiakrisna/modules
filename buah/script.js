import { fruits } from "./data.js";
import { animal } from "./data.js";

// console.log("ini adalah data buah",fruits)
// console.log("ini adalah data hewan",animal)

// let buah = document.getElementById('buah').innerHTML = fruits[0].fruitName

fruits.forEach(function (data) {
    const div = document.createElement('div');
    div.className = "data-buah";

    div.innerHTML = 
    '<p>Nama Buah: '+data.fruitName+'</p>'+
    '<p>Nama Latinnya: '+data.latinName+'</p>'+'<br>'
    document.getElementById("buah").appendChild(div);
});

animal.forEach(function (dataAnimal) {

    const div = document.createElement('div');
    div.className = "data-buah";

    div.innerHTML = 
    '<p>Nama Hewan: '+dataAnimal.animalName+'</p>'+
    '<p>Nama Latinnya: '+dataAnimal.latinName+'</p>'+
    '<p>Suaranya: '+dataAnimal.animalSounds+'</p>'+'<br>'
    document.getElementById("hewan").appendChild(div);
});