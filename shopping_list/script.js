var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	toggleDoneOnClick(li);
	createDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneOnClick(li) {
	li.addEventListener("click", () => {
		li.classList.toggle("done");
	});
}


function createDeleteButton(li) {
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("x"));
	li.appendChild(deleteButton);

	deleteButton.addEventListener("click", () => {
		li.remove();
	})
}

lists.forEach(li => {
	toggleDoneOnClick(li);

	createDeleteButton(li);
});


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
