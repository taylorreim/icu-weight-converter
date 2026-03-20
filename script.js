function convert(){
  let lbs = document.getElementById("weightInput").value;
  let kg = lbs/2.2046;
  let rounded = kg.toFixed(1);
  document.getElementById("result").innerText = lbs + "lbs=" + rounded + " kg";
}
