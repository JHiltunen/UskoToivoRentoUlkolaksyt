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

    console.log("All elements are now created to the page");
}

function drag(event) {
    console.log("Drag started..")
    // set data type and value of dragged data
    // in this case type is "text" and the value is id of the draggable element (for example: "word0", "word1")
    event.dataTransfer.setData("text", event.target.id);
}