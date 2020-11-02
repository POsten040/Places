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
    $("#IDProperties").append("You could go there for:" + "<li>" + placesToGo.places[0].landmarks + "</li>" + "The best time of year for that:" + "<li>" + placesToGo.places[0].timeOfYear + "</li>" + "<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[0].notes + "</li>");
    $("#COProperties").text("");
    $("#NYProperties").text("");
    $("#LAProperties").text("");  
  });
  
  $("span#CO").click(function () {
    $("#COProperties").append("You could go there for:" + "<li>" + placesToGo.places[1].landmarks + "</li>" + "The best time of year for that:" + "<li>" + placesToGo.places[1].timeOfYear + "</li>" + "<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[1].notes + "</li>");
    $("#IDProperties").text("");
    $("#NYProperties").text("");
    $("#LAProperties").text(""); 
  });
  

  $("span#NY").click(function () {
    $("#NYProperties").append("You could go there for:" + "<li>" + placesToGo.places[2].landmarks + "</li>" + "The best time of year for that:" + "<li>" + placesToGo.places[2].timeOfYear + "</li>" + "<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[2].notes + "</li>");
    $("#COProperties").text("");
    $("#IDProperties").text("");
    $("#LAProperties").text(""); 
  });
  
  $("span#LA").click(function () {
    $("#LAProperties").append("You could go there for:" + "<li>" + placesToGo.places[3].landmarks + "</li>" + "The best time of year for that:" + "<li>" + placesToGo.places[3].timeOfYear + "</li>" + "<p>" + "Summary:" + "</p>" + "<li>" + placesToGo.places[3].notes + "</li>");
    $("#COProperties").text("");
    $("#NYProperties").text("");
    $("#IDProperties").text(""); 
  });
});
