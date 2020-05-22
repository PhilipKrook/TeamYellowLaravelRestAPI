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
            th {
                margin: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            

            <!-- Här sätter vi rubriken på sidan "Welcome to the spaceshipstore" -->
            <div class="content">
                <div class="title m-b-md">
                    Your order has been sent!
                </div>

            <!-- Här visar vi sidans alla länkar -->
                <div class="links">
                    <a href="/" accesskey="1" title="">Main Menu</a>
                    <a href="clear" accesskey="2" title="">Cancel Order</a>
                    <a href="buy" accesskey="3" title=""></a>
                    </div>
                <div class="table-responsive">
  <table class="table table-striped table-hover table-condensed">
  <thead>
      <tr>
        <th><strong><u>Id</u></strong></th>
        <th><strong><u>Name</u></strong></th>
        <th><strong><u>Origin</u></strong></th>
        <th><strong><u>Class</u></strong></th>
        <th><strong><u>Price(Spacecoins)</u></strong></th>
      </tr>
      </br>
    </thead>
    <tbody>
    
    
    
    </tbody>
    
</div>


@foreach($ships as $ship)

    <tr>    
      <th>{{$ship->id}}</th>
      <th>{{$ship->shipName}}</th>
      <th>{{$ship->shipOrigin}}</th>
      <th>{{$ship->shipClass}}</th>
  
      <th>
    


</th>
                     
    </tr>
@endforeach
<!-- Visar den totala summan av alla skepp -->
<tr><th> <h3>Total cost: {{$sum ?? ''}}</h3></th></tr>

  

            </div>
        </div>
</form>        
    </body>
</html>
