// Business logic:
function PlacesToGo() {
  this.places = [];
  this.currentId = 0;
}

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
let Idaho = new Place("Idaho", ["Hotsprings", "Skiing"], ["Winter", "Fall"], "great place for outdoors");
let Colorado = new Place("Colorado", "Ouray", "Winter", "great for ice climbing");
let NewYork = new Place("NewYork", "Time Square", "Spring", "Best Bagels");
let LosAngeles = new Place("LosAngeles", "Beach", "Summer", "great place for music scene");

PlacesToGo.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesToGo.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

PlacesToGo.prototype.printProperties = function () {
  this.places.forEach(function (place){
    console.log(place.landmarks);
    console.log(place.timeOfYear);
    console.log(place.notes);
  });
}


let placesToGo = new PlacesToGo();
placesToGo.addPlace(Idaho);
placesToGo.addPlace(Colorado);
placesToGo.addPlace(NewYork);
placesToGo.addPlace(LosAngeles);
placesToGo.printProperties();

// User interface logic:

$(document).ready(function () {



  event.preventDefault();

});
