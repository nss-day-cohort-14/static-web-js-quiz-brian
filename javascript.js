
var growthButton = document.getElementById("miracleGrow");
var heightInput = document.getElementById("howTall");
var charInput = document.getElementById("whatLeaf");

// Function to grow tree on keypress
function enterKey(event) {
	var key = event.keyCode;
	if (key === 13) {
		toGrow();
	}	
}

// Function to build tree
function toGrow() {
	console.log("whats up", heightInput.value);
	// Tree key: value pairs
	var tree = {
		height: heightInput.value,
		leaf: charInput.value
	}
	// Create row string, define space variables for positioning purposes
	var row = "";
	var space = " ";
	var spaceAmount = tree.height - 1;
	var reduceSpace = 1;

	if (heightInput.value === "" || charInput.value === "") {
		alert("Please enter both a number for the height of the tree and a character for the tree to be built from.");

	} else {
		// Establish the first row to work from
		// for loop for spaces and then character
		for (var i = 0; i < spaceAmount; i++) {
			row += space;
		}
		row += tree.leaf;
		console.log("firstRow", row);

		// To follow pyramid shape, reduce spacing by one and increase character count by two
		for (var i = 1; i < spaceAmount; i++) {
			row = row.substr(reduceSpace);
			row += tree.leaf;
			row += tree.leaf;
			console.log("     Row", row);
		}
	}
}

// Event listeners to grow tree
growthButton.addEventListener("click", toGrow);
whatLeaf.addEventListener("keypress", enterKey);


