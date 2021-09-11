let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newList = document.createElement("li");
	newList.innerHTML = "Fourth element";
	document.getElementById("myList").appendChild(newList)

});
