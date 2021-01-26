'use strict'
var allCars = [];
var form = document.getElementById("carSelect")
var carDiv = document.getElementById("carDisplay")
function Car(name, model, year){
    this.name = name;
    this.model = model;
    this.year = year;
    allCars.push(this);
  
}
Car.prototype.renderCar = function(){
    var imgDiv = document.createElement("div");
    var descDiv = document.createElement("div")
    var container = document.createElement("div")
    container.style.display = "block"
    container.style.margin = "0 0 5px 0"
    var img = document.createElement("img")
    var carName = document.createElement("p")
    var modelYear = document.createElement("p")
    imgDiv.classList.add("image")
    descDiv.classList.add("description")
    img.src = `images/${this.model}.png`
    carName.textContent = `Car name: ${this.name}`
    modelYear.textContent = `Model Year: ${this.year}`
    imgDiv.appendChild(img)
    descDiv.appendChild(carName);
    descDiv.appendChild(modelYear);
    container.append(imgDiv);
    container.append(descDiv);
    carDiv.appendChild(container);
}
checkStorage();
form.addEventListener("submit", addCar)


function checkStorage(){
    if(localStorage.length>0){
        renderCars()
    }
}
function addCar(event){
    event.preventDefault();
    var input = event.target;
    new Car(input.name.value, input.model.value, input.year.value).renderCar()
    localStorage.setItem("allCars", JSON.stringify(allCars))
}
function renderCars(){
    var storage = JSON.parse(localStorage.getItem("allCars"))
    for(let i = 0; i<storage.length; i++){
        new Car(storage[i].name, storage[i].model, storage[i].year).renderCar()
    }
}