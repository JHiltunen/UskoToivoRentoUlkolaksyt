<?php

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $arrayFromUi = json_decode($_POST['data']);

        checkCorrectAnswer($arrayFromUi);
    }    

    function readUlkolaksyt() {
        $array = readUlkolaksyFromFile();
        
        // shuffle the array so words are not in correct order on UI
        shuffle($array);

        // format the array to json so we can read it on client side
        $array = json_encode($array);

        // return the json array where each word are separated from each other
        return $array;
    }

    function checkCorrectAnswer($wordArray) {
        // read ulkolaksy words in correct order
        $ulkolaksyArray = readUlkolaksyFromFile();

        $ulkolaksyArrayFromUi = [];

        // loop trough all words from UI and put them in to array (so words are seprated by comma)
        for ($i=0; $i < sizeof($wordArray); $i++) { 
            array_push($ulkolaksyArrayFromUi, $wordArray[$i]->innerText);
        }

        // check if both arrays have same elements in same order
        // return to ajax request
        if ($ulkolaksyArray == $ulkolaksyArrayFromUi) {
            echo json_encode("Congratulations!!!");
        } else {
            echo json_encode("Failed. Better luck next time...");
        }
    }

    function readUlkolaksyFromFile() {
        // open file, only in read mode
        $file = fopen("properties/ulkolaksyt.txt", "r") or die("Unable to open file!");

        // create empty array
        $array = [];

        // loop until file pointer reaches end of file
        while (! feof($file)) {
            // replace dots with spaces
            $row = trim(str_replace(".", " ", fgets($file)));
            // remove double spaces
            $row = str_replace("  ", " ", $row);
            // convert string to array using PHP function
            $array = explode(" ", $row);
        }

        // close file
        fclose($file);

        return $array;
    }
?>