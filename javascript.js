// Define tree object
var tree = {};

function getTree() {
	// Define height and character key value pairs
	tree.height = document.getElementById("howTall").value;
	tree.leaf = document.getElementById("whatLeaf").value;	
};

// Function to build tree
function toGrow(tree) {
	// Create row string, define space variables for positioning purposes
	var row = "";
	var space = " ";
	var spaceAmount = tree.height - 1;
	var reduceSpace = 1;

	if (tree.height === "" || tree.leaf === "") {
		alert("Please enter both a number for the height of the tree and a character for the tree to be built from.");

	} else {
		// Establish the first row to work from
		// for loop for spaces and then character
		for (var i = 0; i < spaceAmount; i++) {
			row += space;
		}
		row += tree.leaf;
		console.log(row);

		// To follow pyramid shape, reduce spacing by one and increase character count by two
		for (var i = 1; i < tree.height; i++) {
			row = row.substr(reduceSpace);
			row += tree.leaf;
			row += tree.leaf;
			console.log(row);
		}
	}
}

// Event listeners to grow tree
// Refactored functions into event listeners, calling for tree values and passing them into the toGrow() when invoked.  Could not get click event to call function without passing values to it first.
document.getElementById("whatLeaf").addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		getTree();
		toGrow(tree);
	}
});
document.getElementById("miracleGrow").addEventListener("click", function() {
	getTree();
	toGrow(tree);
});
