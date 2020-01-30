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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/search', function () {
    return view('search');
    
});

Route::get('/result', function () {

    //$ships = DB::table('Ships')->get();

    //return view('result', ['ships' => $ships]);
});

Route::post('/result', 'SearchController@index'); 
Route::post('/listall', 'SearchController@listAll'); 
Route::post('/buy', 'SearchController@getResult');
Route::post('/getResult', 'searchController@getResult');

Route::get('/buy', function () {
    echo "HEEELLOOOOO";
    return view('buy');    
});

Route::get('/clear', function () {
    return view('clear');
});