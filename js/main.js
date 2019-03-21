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
        document.getElementById("boxPile").appendChild(div);

        // increase the index by one
        index++;
    });

    console.log("All elements are now created to the page");

}