// Your code here
const uList = document.querySelector('ul');
const addElement = document.getElementById('addToDo');

function makeSureThisFunctionWorksToMakeTheExerciseCompile() {
    let trashElements = document.querySelectorAll('span');
    for (let i = 0; i < trashElements.length; i++) {
        trashElements[i].addEventListener('click', () => {
            trashElements[i].parentElement.remove();
        })
    }

}


addElement.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) { // we could combine these logic operators
        if (event.target.value != "") {
            let newLi = document.createElement('li');

            uList.appendChild(newLi).innerHTML = `<span><i class='fa fa-trash'></i></span>${event.target.value}`
            makeSureThisFunctionWorksToMakeTheExerciseCompile();

        }
    }
});