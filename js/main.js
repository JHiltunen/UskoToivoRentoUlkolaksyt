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