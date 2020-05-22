<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/




Route::get('ships', 'ApiController@index');

Route::get('ship/{id}', 'ApiController@show');

Route::post('ship', 'ApiController@store');

Route::put('ship', 'ApiController@store');

Route::delete('ship/{id}', 'ApiController@destroy');