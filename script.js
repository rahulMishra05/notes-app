const notesEl = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEl.querySelector(".main");
const textArea = notesEl.querySelector("textarea")

// Adding functionality to edit button.
editBtn.addEventListener('click', () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});

/* 
This will convert the written text into markdown and display
it to another place, where you can not edit the text
*/
textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
})