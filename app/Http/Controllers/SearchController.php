<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function index(Request $request) {
        
        $search = $request->input('search');
        $ships = \DB::table('Ships')->where('shipOrigin', $search)->get();

        echo "ABCD";
        return view('result', ['Ships' => $ships]);    
    }

    public function listAll() {
        $Ships = \DB::table('Ships')->get();

        echo "12345";
        return view('listall', ['Ships' => $Ships]);
    }

    public function getResult(Request $request) {

        $results = $requests->getshipid;

        echo $results;
        echo $getResult;
        echo $getshipid;
        echo "6789";
        return view('buy');
    }
}