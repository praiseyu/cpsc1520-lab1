const openModal = document.querySelector("#open-modal");
const dialogBox = document.querySelector("#dialog-box");
const closeButton = document.querySelector("#close-button");

// runspeedtest button

openModal.addEventListener("click", onOpenDialogBox);

//close dialogbox

closeButton.addEventListener("click", onCloseDialogBox);

//Event Handler Functions:

function onOpenDialogBox(e) {
    dialogBox.showModal();
}

//close dialog box

function onCloseDialogBox(e){
    dialogBox.close();
}

dialogBox.addEventListener("click", onClickOutsideDialog);

function onClickOutsideDialog(e){
    const dialogDimensions = dialogBox.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom) {
            e.currentTarget.close();
        }
    
}