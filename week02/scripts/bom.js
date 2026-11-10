// Get references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// wait for button click
button.addEventListener('click', function() {

    // click if user entered something
   if(input.value != "") {

        // create list item and give it the value of the input
        const li = document.createElement('li');

        // populate the li element varible's textcontent or innerHTML with the value of the input field
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // add event to the ceated button
        deleteButton.addEventListener("click", function () {
            list.removeChild(li)
            input.focus();
        })

        // add delete button to the list items
        li.appendChild(deleteButton);

        // OUTPUT: finally display the completed list item to the unordered list
        list.appendChild(li)

        // clear user input field
        input.value =""
   }
   // focus the user back to the input field
   input.focus();
}); 

