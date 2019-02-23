// variabelen voor alle DOM-elementen waar ik iets mee wil
const userInput = document.querySelector('.userinput');
const addButton = document.querySelector('.addtodo');
const toDoList = document.querySelector('.todolist');

// deze twee doen niks want bestaan nog niet in DOM
// const listItem = document.querySelector('.listitem');
// const deleteButton = document.querySelector('.deletetodo');

// add = list item maken, input field weer leeg maken
addButton.addEventListener('click', () => {
    if (userInput.value === '') {
        return;
    }
    toDoList.innerHTML += `<li class="listitem"><p>${userInput.value}</p><button class="deletetodo">×</button></li>`;
    userInput.value = '';
});

//afvinken todo & on-afvinken todo met toggle
const toggleDone = listItem => {
    listItem.classList.toggle('done');
};
toDoList.addEventListener('click', () => {
    toggleDone(event.target);
});

//verwijderen todo
const deleteItem = deleteToDo => {
    deleteToDo.remove();
};
toDoList.addEventListener('click', () => {
   if (event.target.classList.contains('deletetodo')) {
        deleteItem(event.target.closest(".listitem"));
        return; //slaat deze return wel ergens op?
   };     
});

// ik gebruik twee keer een eventlistener op ToDolist, kun je dus combineren met
// die class check