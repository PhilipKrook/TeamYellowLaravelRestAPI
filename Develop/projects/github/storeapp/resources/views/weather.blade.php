<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <link rel="stylesheet" href="style.css" />
    <script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Buy Spaceships</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #4B4B4C;
                color: white;
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

.container {
  margin-top: -300px;
  text-align: center;
}

.weather {
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin: 0;
}



.text {
  font-size: 60px;
  font-weight: bold;
  margin: 0;
}

.temp {
  font-size: 60px;
  margin: 0;
  font-weight: bold;
}

.location {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 40px;
  margin-top: -340px;
}
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            
            <!-- Här sätter vi rubriken på sidan "Welcome to the spaceshipstore" -->
            <div class="content">
                <div class="title m-b-md">
                    Weather at Area 51
                </div>
                <!-- Här visar vi sidans alla länkar -->
                <div class="links">
                    <a href="/" accesskey="2" title="">Main Menu</a>
                    
                    </div>
            </div>
        </div>
        
        <div class="container">
        
      <img class="icon" />
      <p class="weather"></p>
      <p class="temp"></p>
      <p class="text">°C</p>
      <p class="location"></p>
      
    </div>
        <script>
       let city = "Roswell";

$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&APPID=39582dfcffe4dd8d5e2285b4f4014a04",
  function(data) {
    console.log(data);

    let icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    // let temp = Math.floor(data.main.temp);
    // för att ta bort decimaler i temp.
    // let temp = data.main.temp;
    // för att visa med decimaler.
    let temp = Math.floor(data.main.temp);
    let weather = data.weather[0].main;
    let location = data.name;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".location").append(location);
  }
);


        </script>


    </body>
</html>

