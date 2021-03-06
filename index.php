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
    <script src="js/jquery.ui.touch-punch.min.js"></script>

    <script src="js/main.js"></script>
    <script src="js/nav.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <link rel="stylesheet" type="text/css" href="css/nav.css">
    <title>Ulkoläksy peli</title>
</head>
<body>

    <header>
      <img src="img/UskoToivoRento.jpg" alt="UskoToivoRento">
      <span id="openNav" onclick="openNav()"><i class="fa fa-bars fa-2x"></i></i></span>
    </header>

    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">Etusivu</a>
        <a href="#">Ulkoläksyt</a>
        <a href="#">Ota yhteyttä</a>
    </div>
    
    <div id="main">    
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
    </div>
</body>
</html>