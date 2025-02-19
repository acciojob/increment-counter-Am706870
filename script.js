//your JS code here. If required.
let counter = 0;
function incrementCounter(){
	alert("Current counter value:", +counter);

	counter++;
	document.getElementByID("counter").innerText = counter;
}
