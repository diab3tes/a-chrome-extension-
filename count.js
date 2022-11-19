// import "./styles.css";

document.getElementById("app").innerHTML = `
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" href="styles.css">
<div class="float">
 <p>Counter: <span>0<span></p>
 <button id="mainButton" type="button"  class="btn btn-info btn-circle btn-xl"><i class="glyphicon glyphicon-ok"></i></button>
</div>
`;

let counter = document.querySelector("span");
let counterState = Number(counter.innerText);
const increaseButton = document.getElementById("mainButton");

increaseButton.addEventListener("click", () => {
  counter.innerText = counterState += 1;
});

