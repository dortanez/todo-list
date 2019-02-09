function add() {

	var itemInput = document.getElementById("itemInput");

	if(itemInput.value.trim() !== "") {

		var newLi = document.createElement("li");

		newLi.innerText = itemInput.value;

		var todoList = document.getElementById("todoList");

		todoList.appendChild(newLi);

		itemInput.value = " ";

	} else {

		alert("NO INPUT IN FIELD");

	}

}