const addBtn = document.getElementById('add');

// Here we had added an event listner, that will fire this function whenever add notes button  will be clicked
addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `
    <div class="note">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
    </div>
    `;

    // const notesEl = note.querySelector(".notes");
const editBtn = note.querySelector(".edit");
const deleteBtn = note.querySelector(".delete");

const main = note.querySelector(".main");
const textArea = note.querySelector("textarea")

// Adding functionality to edit button.
editBtn.addEventListener('click', () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});

deleteBtn.addEventListener("click", () => {
    note.remove();
});

/* 
This will convert the written text into markdown and display
it to another place, where you can not edit the text
*/
textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
});

    document.body.appendChild(note);
}



 