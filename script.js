// Write your JavaScript code here!
window.addEventListener("load", function() {
let launchForm = document.getElementById("launchForm");
launchForm.addEventListener("submit", function(event) {
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let error = "no";
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      window.alert("All fields are required.");
      error = "yes";
      event.preventDefault();
   }
   if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      window.alert("Invalid entry.");
      error = "yes";
      event.preventDefault();
   }

   let pilotStatus = document.getElementById("pilotStatus");
   pilotStatus.innerHTML += `: ${pilotName.value}`;
   let copilotStatus = document.getElementById("copilotStatus");
   copilotStatus.innerHTML += `: ${pilotName.value}`;

   if (fuelLevel.value < 10000) {
      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";
      let fuelStatus = document.getElementById("fuelStatus");
      fuelStatus.innerHTML = "Not enough fuel for journey.";
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerHTML = "Shuttle not ready for launch.";
      launchStatus.style.color = "red";
      event.preventDefault();
      } 

   if (cargoMass.value > 10000) {
      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";
      let cargoStatus = document.getElementById("cargoStatus");
      cargoStatus.innerHTML = "Too much mass for shuttle to take off.";
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerHTML = "Shuttle not ready for launch.";
      launchStatus.style.color = "red";
      event.preventDefault();
      } 

   if (fuelLevel.value >= 10000 && cargoMass.value <= 10000 && error === "no") {
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerHTML = "Shuttle is ready for launch.";
      launchStatus.style.color = "green";
      event.preventDefault();
   }
})

   let missionTarget = document.getElementById("missionTarget");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
   let index = Math.floor(Math.random()*json.length)
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${json[index].name}</li>
       <li>Diameter: ${json[index].diameter}</li>
       <li>Star: ${json[index].star}</li>
       <li>Distance from Earth: ${json[index].distance}</li>
       <li>Number of Moons: ${json[index].moons}</li>
   </ol>
   <img src="${json[index].image}">`
      })
   })
})



{/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */}
