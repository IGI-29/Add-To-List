let addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", addItem);

let ul = document.getElementById("addlist");

function addItem(e) {
  if (ul.children[0].className == "container emptymsg") {
    ul.children[0].remove();
  }

  let item = e.currentTarget.previousElementSibling;

  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.innerHTML = `<h3 class="flex-grow-1">${item.value}</h3>
        <button class="btn btn-warning mx-3" onclick="editItem(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeItem(this)">Remove</button>`;
  ul.appendChild(li);
}

function removeItem(currElement) {
  currElement.parentElement.remove();
  let ul = document.getElementById("addlist");

  if (ul.children.length <= 0) {
    let msg = document.createElement("h3");
    msg.classList.add("container");
    msg.classList.add("emptymsg");
    msg.textContent = "Nothing is here. Please Add an Item!!";
    ul.appendChild(msg);
  }
}

function editItem(currElement) {
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit";
    let currItemName = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h3");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currItemName;
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Done";

    let currItemName = currElement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.placeholder = "Edit Item";
    currInput.className = "form-control";
    currInput.value = currItemName;

    currElement.parentElement.replaceChild(
      currInput,
      currElement.previousElementSibling
    );
  }
}
