<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/* När path:en är "/" så retuneras vyn "welcome.blade.php"*/
Route::get('/', function () {
    return view('welcome');
});

/* När path:en är "/search" så retuneras vyn "search.blade.php"*/
Route::get('/search', function () {
    return view('search');
});

/* När path:en är "/clear" så retuneras vyn "clear.blade.php"*/
Route::get('/clear', function () {
    return view('clear');
});

Route::get('/weather', function () {
    return view('weather');
});
/* När path:en är till exempel "/result" så används controllern "SearchController" 
   och @index indikerar på att den ska använda sig av funktionen index som finns i
   SearchControllern. */
Route::post('/result', 'SearchController@index'); 
Route::post('/listall', 'SearchController@listAll'); 
Route::post('/clear', 'SearchController@clear');
Route::get('/buy', 'SearchController@getResult'); 





