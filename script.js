// variabelen voor alle DOM-elementen waar ik iets mee wil
const userInput = document.querySelector('.userinput');
const addButton = document.querySelector('.addtodo');
const toDoList = document.querySelector('.todolist');

// add = list item maken, input field weer leeg maken
addButton.addEventListener('click', () => {
    if (userInput.value === '') {
        return;
    }
    toDoList.innerHTML += `<li class="listitem"><p>${userInput.value}</p><button class="deletetodo">×</button></li>`;
    userInput.value = '';
});

//variabelen voor afvinken en verwijderen
const toggleDone = listItem => {
    listItem.classList.toggle('done');
};

const deleteItem = deleteToDo => {
    deleteToDo.remove();
};

//acties voor afvinken en verwijderen
toDoList.addEventListener('click', () => {
    if (event.target.classList.contains('listitem')) {
        toggleDone(event.target);
    }
    if (event.target.classList.contains('deletetodo')) {
        deleteItem(event.target.closest(".listitem"));
    }
});