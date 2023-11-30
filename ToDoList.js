let addToDoButton = document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//?It selects an HTML element with the ID 'addToDo' and assigns it to the variable addToDoButton. This element is typically a button that users can click to add a to-do item.

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    //?It creates a new HTML paragraph (<p>) element and assigns it to the variable 

    paragraph.classList.add('paragraph-styling');

    //? It adds a CSS class named 'paragraph-styling' to the newly created paragraph. This class likely contains predefined styling rules for paragraphs.

    paragraph.innerText = inputField.value;
    //?It sets the text content of the paragraph to the current value of the inputField. This value is presumably the text entered by the user in an input field.

    toDoContainer.appendChild(paragraph);

    //?It appends the newly created and styled paragraph to the toDoContainer (the container where to-do items are displayed).

    inputField.value="";

    //?It clears the text in the inputField after adding a to-do item.

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })

    //?It adds a click event listener to the created paragraph. When this paragraph is clicked, it sets its text decoration to "line-through," typically indicating that the to-do item has been marked as completed.

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})


