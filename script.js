console.log("hello");
var cel_result; //the final result in celsius
var button= document.querySelector("#fucking_button_id");
var farh = document.querySelector("input");
button.addEventListener("click", math_convert);
function math_convert(){
  //converts the users fah value to celsius
  var  farh_value = farh.value;
  cel_result = ((parseFloat(farh_value)-32)*(5/9));

  console.log(farh_value);
  console.log(cel_result);
  document.getElementById("celsius").innerHTML = cel_result;
  // return cel_result = document.querySelector("div").value;
}

 // cel_result = document.querySelector("div").value;
