<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Buy Spaceships</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #4B4B4C;
                color: #C6C6C6;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
                
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: white;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
                
            }

            .m-b-md {
                margin-bottom: 30px;
                color: white;
            }

            a:hover {
                color: #636b6f;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            
            <!-- Här sätter vi rubriken på sidan "Search results" -->
            <div class="content">
                <div class="title m-b-md">
                    Search results
                </div>

                <!-- Här visar vi sidans alla länkar -->
                <div class="links">
                    <a href="/" accesskey="1" title="">Main Menu</a>
                    
                    </div>
                <div class="table-responsive">
  <table class="table table-striped table-hover table-condensed">
  <thead>
      <tr>
        <th><strong><u>Name</u></strong></th>
        <th><strong><u>Origin</u></strong></th>
        <th><strong><u>Class</u></strong></th>
        <th><strong><u>Price (SpaceCoins)</u></strong></th>
        <th><strong><u>Add amount</u></strong></th>
      </tr>
      </br>
    </thead>
    </div>


<!-- SÖKFUNKTIONEN -->
<form method="POST" action="/result">
@csrf

    <input type="text" name="search" class="form-control" placeholder="Starwars,Startrek ect..">

    <button class="btn btn-success">Search</button>

</form>


<form name="getResult" action="/buy">
@csrf
@foreach($ships as $ship)

    <tr>    
      <th>{{$ship->shipName}}</th>
      <th>{{$ship->shipOrigin}}</th>
      <th>{{$ship->shipClass}}</th>
      <th>{{$ship->shipPrice}}</th>
      <th>
    

<input type="checkbox" name="getshipid[]" value="{{$ship->id}} {{$ship->shipName}} {{$ship->shipOrigin}} {{$ship->shipClass}} {{$ship->shipPrice}}">
</th>
                     
    </tr>
@endforeach
 
  <input type="submit" value="Confirm Order">
</form> 
            </div>
        </div>


        
    </body>
</html>
