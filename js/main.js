console.log("JavaScript File is linked");

// Variables

const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
// add variable for reset button; homework!!!!!!!!!!
// add variable for label box

// Bug #2 fix - reset button variable
const resetButton = document.querySelector("#reset-btn");
const labelBox = document.querySelector("#label-box");






// Functions

function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currentDraggedElement
    currentDraggedElement = this; 
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    // prevent double drops here
    // if this dropzone has a child, don't let it drop
    // use a return statement



    // if(this.children.length>=1) {
    //     return;
    // }
   
    // Bug #1 fix - if the dropzone already has a label, don't let it drop another one in there
if(this.children.length>0) {
        return;
    }

    // drop the piece 
    this.appendChild(currentDraggedElement);
    // here need to add something for homework - use if & this

    // Bonus - remove highlight after drop
    this.classList.remove("highlight");

    // reset the reference
    currentDraggedElement = null;
}

// function reset() {
    // collect all the labels and put them back
    // check aall target zones/loop through them, see IF the dropzone has a label in it, 
    // if it does, add that label back to the pieces
    // labelBox.appendChild(); put pack piece
// }

// Bug #2 fix - reset function
function resetPuzzle() {
    // loop through all target zones
    targetZones.forEach(moveLabelBack);
}
    // if the zone has a child (i.e., a label), move it back to the labelBox
function moveLabelBack(zone) {
    if (zone.children.length > 0) {
        labelBox.appendChild(zone.firstElementChild);
    }
}

function dragEnter() {
    this.classList.add("highlight");
}

function dragLeave() {
    this.classList.remove("highlight");
}






// Event Listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
})

// add event listner for the reset button HOMEWORK!!!!!!!!!!!!
// listen for the click event, call a reset function

// Bug #2 fix - reset button event listener
resetButton.addEventListener("click", resetPuzzle);


// Bonus fix - highlight dropzone when dragging over it
targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
});