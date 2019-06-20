function init(ulkolaksy) {
    console.log("Initialization in progress...");
    console.log("Got array as parametter: ");
    console.log(ulkolaksy);

    // declare index variable to get individual id's for elements
    var index = 0;

    console.log("Constructing html div elements..");
    // loop through all the words inside the array
    ulkolaksy.forEach(word => {
        var div = document.createElement("div");
        div.id = "word" + index;
        div.innerText = word;
        div.class="ui-state-default";

        document.getElementById("boxPile").appendChild(div);

        // increase the index by one
        index++;
    });

    console.log("All individual word elements are now created to the page");
    
    // call function to create button so user can check for right answers
    initAnswerChecking();
}

function initAnswerChecking() {
    // create button element
    var checkAnswerButton = document.createElement("BUTTON");
    checkAnswerButton.id = "check";
    checkAnswerButton.innerText = "Tarkista";

    checkAnswerButton.onclick = function() {
        console.log("Vittu ku toimis..");

        // find all divs that contain words put the divs in to an array
        var words = [].slice.call(document.querySelectorAll("[id^='word']"));

        var jsonArray = JSON.stringify(words, ["innerText"]); // we need only innerText to be stringified

        console.log("JsonArray: " + jsonArray);

        // create ajax request
        // pass array of words to php file
        $.ajax({
            type: "POST",
            data: {data : jsonArray},
            dataType: "json",
            url: "ulkolaksyt.php",
            success: function(msg){
                console.log("MSG: " + msg);
                alert(msg);
            }
        });
    }    

    document.body.appendChild(checkAnswerButton);
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