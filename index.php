<?php
    include("ulkolaksyt.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/main.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <title>Ulkoläksy peli</title>
</head>
<body>
    <script>
        $(document).ready(function() {
            // get ulkoläksy that has been read with PHP
            var array = <?php echo readUlkolaksyt(); ?>;

            // pass ulkoläksy to init function so we can create elements for individual words
            init(array);
    
            $(function() {
                $( "#boxPile" ).sortable();
                $( "#boxPile" ).disableSelection();
            } );
        });
    </script>

    <div id="boxPile"></div>

    <p class="answer"></p>

        <script>
            $("#check").click(function() {
                console.log("Click");
            });
        </script>

</body>
</html>