//your JS code here. If required.
let counter = 0;
function incrementCounter(){
	alert("Current counter value:", +counter);

	counter++;
	var val = document.getElementByID("counter");
	val.innerText = counter;
}
