const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');
const main = notesEL.querySelector(".main");
const textArea = notesEl.querySelector("textarea")

// Adding functionality to edit button.
editBtn.addEventListener('click', () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
})