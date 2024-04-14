let shoppingListItems = ["milk","eggs","bread"];
updateItems();

// Here we grab the ul (unordered list) from the HTML
//let listElement = document.getElementById("shopping-list-items");

//for (const shoppingItem of shoppingListItems) {
    //console.log(shoppingItem);

// We create a list element
//let itemElement = document.createElement("li");
// Add the inner text to the list element
//itemElement.innerText = shoppingItem;
// Add the list element to the ul
//listElement.appendChild(itemElement);
//};


function addItem() {
    const item = document.getElementById("new-item-text");
    let itemValue = item.value;
    item.value = "";
    shoppingListItems.push(itemValue);
    //call the update Items function after we add an item to the array
    updateItems();

};

function updateItems() {
    // First we get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items
    listElement.innerHTML = "";
    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        // This creates a new list item
        let itemElement = document.createElement("li");
        // stes the content of the ist item to an otem from the array
        itemElement.innerText = shoppingItem;
        // This one adds the list item to the doc
        listElement.appendChild(itemElement);
    };
};

function clearList(){
    shoppingListItems.splice(0, shoppingListItems.length);
    updateItems();
}

// clear list 2 option:
//function clearList(){
//    shoppingListItems = [];
//    updateItems();
//}


