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
// hierboven kun je ook 'submit' gebruiken, als je een form in je HTML hebt.
// dan wel preventDefault omdat ie het niet naar de server hoeft te sturen,
// maar dan werkt het ook met enter in plaats van alleen met klik

// EN: die += zorgt ervoor dat hele lijst opnieuw geladen wordt met extra element
// is niet echt best practice ivm performance en bijv. animaties

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
    };
    if (event.target.classList.contains('deletetodo')) {
        deleteItem(event.target.closest(".listitem"));
    };
});
