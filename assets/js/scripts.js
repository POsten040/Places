// Business logic:
function PlacesToGo(){
  this.places=[];
  this.currentId=0;
}

function Place(location, landmarks, timeOfYear, notes){
  this.location=location;
  this.landmarks=landmarks;
  this.timeOfYear=timeOfYear;
  this.notes=notes;
}
let Idaho = new Place("Idaho", ["Hotsprings", "Skiing"], ["Winter", "Fall"], "great place for outdoors");
let Colorado = new Place("Colorado", "Ouray", "Winter", "great for ice climbing");
let NewYork = new Place ("NewYork", "Time Square", "Spring", "Best Bagels");
let LosAngeles = new Place("LosAngeles", "Beach", "Summer", "great place for music scene");

PlacesToGo.prototype.addPlace = function(place) {
  place.id=this.assignId();
  this.places.push(place);
}

PlacesToGo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function locationNames(places){
  for (let i=0; i<places.length; i++){
    PlacesToGo.places[i].location;
    console.log(PlacesToGo.places[i].location);
  }
}
let placesToGo=new PlacesToGo();
let place1=new Place ("Idaho", ["Hotsprings", "Skiing"], ["Winter", "Fall"], "great place for outdoors");
let place2 = new Place ("Colorado", "Ouray", "Winter", "great for ice climbing");
placesToGo.addPlace(place1);
placesToGo.addPlace(place2);

// AddressBook.prototype.addPlace = function(contact) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
}

// User interface logic:

$(document).ready(function () {



  event.preventDefault();

});
