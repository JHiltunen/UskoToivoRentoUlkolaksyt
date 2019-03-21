function init(ulkolaksy) {
    console.log("Initialization in progress...");
    console.log("Got array as parametter: ");
    console.log(ulkolaksy);

    // declare index variable to get individual id's for elements
    var index = 0;

    console.log("Constructing html div elements..");
    // loop through all the words inside the array
    ulkolaksy.forEach(word => {
        var div = document.createElement("DIV");
        div.id = "word" + index;
        div.innerText = word;

        // make the element draggable
        div.draggable = true;
        // add event listener to the element to apply function to dragstart attribute
        div.onload = function(event) {
            this.addEventListener('dragstart', drag, false);
        };

        document.getElementById("boxPile").appendChild(div);

        // increase the index by one
        index++;
    });

    console.log("All individual word elements are now created to the page");
    
    // call function to create div elements where user is able to drag words
    initBoxSlots(ulkolaksy);
}

function initBoxSlots(ulkolaksy) {
    console.log("Starting to create elements for boxSlots")
    var index = 0;
    
    // loop through the individual words to make as many slots as there are words
    ulkolaksy.forEach(element => {
        var boxSlot = document.createElement("DIV");
        boxSlot.id = "slot" + index;
        boxSlot.innerText = "slot";

        // add event listeners to the element to apply function to on dragover and ondrop attributes
        boxSlot.onload = function(event) {
            this.addEventListener('onclick', function() {
                console.log("CLicked");
            });
            this.addEventListener('ondragover', allowDrop(event), false);
            this.addEventListener('ondrop', drop(event), false);
        }

        document.getElementById("boxPile").appendChild(boxSlot);

        // increase the index by one
        index++;
    });

    console.log("All boxSlots are now created on the page");
}

function drag(event) {
    console.log("Drag started..")
    // set data type and value of dragged data
    // in this case type is "text" and the value is id of the draggable element (for example: "word0", "word1")
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    // by default, data/elements cannot be dropped in other elements.
    // To allow a drop, we must prevent default handling of the element
    event.preventDefault();
}

function drop(event) {
    event.preventDefault(); // prevent the browser default handling of the data (default is open as link on drop)
    var data = event.dataTransfer.getData("text"); // Get the dragged data with the dataTransfer.getData() method. In this case it's the id of individual word
    console.log("Data: " + data); // The dragged data is the id of the dragged element ("word1")
    event.target.appendChild(document.getElementById(data)); // Append the dragged element into the drop element
}