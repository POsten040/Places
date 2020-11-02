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
let Idaho = new Place("Idaho", ["Hotsprings", " Skiing"], ["Winter", " Fall"], "Great place for outdoors");
let Colorado = new Place("Colorado", "Ouray", "Winter", "Great for ice climbing");
let NewYork = new Place("NewYork", "Time Square", "Spring", "Best Bagels");
let LosAngeles = new Place("LosAngeles", "Beach", "Summer", "Great place for music scene");

PlacesToGo.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesToGo.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

PlacesToGo.prototype.printProperties = function (places) {
  this.places.forEach(function (place) {
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
//placesToGo.printProperties();

// User interface logic:

$(document).ready(function () {
  $("span#ID").click(function () {
    //placesToGo.printProperties(placesToGo.places[0]);
    $("#IDProperties").append("You could go there for:" + "<li>" + placesToGo.places[0].landmarks + "</li>");
    $("#IDProperties").append("The best time of year for that:" + "<li>" + placesToGo.places[0].timeOfYear + "</li>");
    $("#IDProperties").append("<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[0].notes + "</li>");
  });
  
  $("span#CO").click(function () {
    $("#COProperties").append("You could go there for:" + "<li>" + placesToGo.places[1].landmarks + "</li>");
    $("#COProperties").append("The best time of year for that:" + "<li>" + placesToGo.places[1].timeOfYear + "</li>");
    $("#COProperties").append("<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[1].notes + "</li>");
  });
  

  $("span#NY").click(function () {
    $("#NYProperties").append("You could go there for:" + "<li>" + placesToGo.places[2].landmarks + "</li>");
    $("#NYProperties").append("The best time of year for that:" + "<li>" + placesToGo.places[2].timeOfYear + "</li>");
    $("#NYProperties").append("<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[2].notes + "</li>");
  });
  
  $("span#LA").click(function () {
    $("#LAProperties").append("You could go there for:" + "<li>" + placesToGo.places[3].landmarks + "</li>");
    $("#LAProperties").append("The best time of year for that:" + "<li>" + placesToGo.places[3].timeOfYear + "</li>");
    $("#LAProperties").append("<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[3].notes + "</li>");
  });

  event.preventDefault();
});
