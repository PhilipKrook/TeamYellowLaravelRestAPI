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

    $ships = DB::table('Ships')->get();

    return view('search', ['ships' => $ships]);
});


Route::get('/buy', function () {
    return view('buy');
});

Route::get('/clear', function () {
    return view('clear');
});
