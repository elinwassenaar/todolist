// variabelen voor alle DOM-elementen waar ik iets mee wil
const userInput = document.querySelector('.userinput');
const addButton = document.querySelector('.addtodo');
const toDoList = document.querySelector('.todolist');
const listItem = document.querySelector('.listitem');
console.log(listItem);

// add = list item maken, input field weer leeg maken

addButton.addEventListener('click', () => {
    if (userInput.value === '') {
        return;
    } else {
        toDoList.innerHTML += `<li class="listitem">${userInput.value}<button class="deletetodo">×</button></li>`;
        userInput.value = '';
    };
});

// toDoItem maken



//variabele voor de deleteknoppen - iets met array? const kan niet met All
const deleteButton = document.querySelector('.deletetodo');




//afvinken todo & on-afvinken todo met toggle


//verwijderen todo
deleteButton.addEventListener('click', event => {
   console.log('dit werkt alleen op het eerste list item');
});

//iets met targeten van de parent van dit ding