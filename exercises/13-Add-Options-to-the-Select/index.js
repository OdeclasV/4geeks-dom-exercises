const select = document.getElementById("mySelect");

window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
  
  for(country of countries){
	  select.innerHTML += `<option value="${country}">${country}</option>`
  }
  
};

select.addEventListener('change', (event) => {
	alert(event.target.value);
})

