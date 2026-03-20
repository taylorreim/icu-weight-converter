function convert(){
  let lbs = document.getElementById("weightInput").value;
  let kg = lbs/2.2046;
  let rounded = kg.toFixed(1);
  document.getElementById("result").innerText = lbs + "lbs=" + rounded + " kg";
}
function calculateDrip() {
  let dose = document.getElementById("doseInput").value;
  let weight = document.getElementById("weightKgInput").value;
  let concentration = document.getElementById("concentrationInput").value;

  let mlPerHour = (dose * weight * 60) / concentration;
  let rounded = mlPerHour.toFixed(1);

  document.getElementById("dripResult").innerText = 
    "Drip rate: " + rounded + " ml/hr";
}
document.getElementById("weightInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    convert();
  }
});

document.getElementById("concentrationInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    calculateDrip();
  }
});
