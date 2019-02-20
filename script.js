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



//variabele voor de deleteknoppen - iets met array?
const deleteButton = document.querySelectorAll('.deletetodo');




//afvinken todo & on-afvinken todo met toggle


//verwijderen todo
deleteButton.addEventListener('click', ()=> {
   console.log('dit werkt');
});

//iets met targeten van de parent van dit ding