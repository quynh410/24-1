function addItem() {
    let input = document.getElementById("inputText");
    let itemList = document.getElementById("itemList");

  
    let value = input.value;

    if (value !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = value;
        itemList.appendChild(listItem);

        input.value = "";

        input.style.backgroundColor = "yellow";
    }
}