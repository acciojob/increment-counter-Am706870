let counter = 0;

        // Function to increment counter and show alert
function incrementCounter() {
            // Show alert with the current value
	alert("Current counter value: " + counter);
            
            // Increment the counter
    counter++;

            // Update the counter paragraph
    document.getElementById("counter").innerText = counter;
}
