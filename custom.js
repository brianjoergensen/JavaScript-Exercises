
// let firstName = document.getElementById('firstname');
// let lastName = document.getElementById('lastname');

// function validate() {
//     console.log(inputFields.value);
// }

// const myArray = ['Hello', 'how', 'are', 'you', '?'];
// const myArrayJoin = myArray.join('&nbsp;').toString();
// document.getElementById('shoppingList').innerHTML = myArrayJoin;

// myArray.forEach(function(myArray) {
//     document.getElementById('shoppingList').innerHTML += '<li>' + myArray + '</li>';
//     // console.log(myArray);
// });

// remember const
const shoppingItems = [];

function displayShoppingItems() {
    const itemInputField = document.getElementById('shoppingListInput').value;

    if(itemInputField == '') {
        return false;
    }

    shoppingItems.push(itemInputField);

    document.getElementById('shoppingList').innerHTML += '<li>'+shoppingItems[shoppingItems.length-1]+'</li>';
    console.log(shoppingItems[shoppingItems.length-1]);
}