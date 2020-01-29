<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function index(Request $request){

        
        $search = $request->input('search');

        $ships = \DB::table('Ships')->where('shipOrigin', $search)->get();
        
        



        return view('result', [
            'Ships' => $ships
            ]);
        
        
    }

    public function listAll() {
        $Ships = \DB::table('Ships')->get();

        return view('listall', ['Ships' => $Ships]);
    }
}
