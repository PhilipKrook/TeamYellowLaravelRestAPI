<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function show($slug)
    {
        $ships = \DB::table('ships')->where('slug', $slug)->first();
        




        return view('search', [
            'ships' => $ships
            ]);
    }
}
