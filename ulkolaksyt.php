<?php
    function readUlkolaksyt() {
        // open file, only in read mode
        $file = fopen("properties/ulkolaksyt.txt", "r") or die("Unable to open file!");

        // create empty array
        $array = [];

        // loop until file pointer reaches end of file
        while (! feof($file)) {
            // replace dots with spaces
            $row = str_replace(".", " ", fgets($file));
            // convert string to array using PHP function
            $array = explode(" ", $row);
        }

        // close file
        fclose($file);

        // shuffle the array so words are not in correct order on UI
        shuffle($array);

        // format the array to json so we can read it on client side
        $array = json_encode($array);

        // return the json array
        // each word is now seprated in  the array
        return $array;
    }

?>