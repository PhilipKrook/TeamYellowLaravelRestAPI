<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function index(Request $request){

        
        $search = $request->input('search');

        $ships = \DB::table('Ships')->where('shipOrigin', $search)->get();
        
        



        return view('result', ['Ships' => $ships]);
        
        
    }

    public function listAll() {
        $Ships = \DB::table('Ships')->get();

        return view('listall', ['Ships' => $Ships]);
    }


    

    public function getResult(Request $request) {

        $results = $request->input('getshipid');

        $sum = 0;

        foreach($results as $result) {
            $list = (explode(" ", $result));
            $id = $list[0];
            $shipName = $list[1];
            $shipOrigin = $list[2];
            $shipClass = $list[3];
            $price = $list[4];
            $sum = $sum + $price;

            $map = [
                'id' => $id,
                'shipName' => $shipName,
                'shipOrigin' => $shipOrigin,
                'klass' => $shipClass,
                'price' => $price
            ];
            $mapArray[] = $map;
        }
        
        return view('buy', ['ships' => $mapArray, 'sum' => $sum]);
        
    }

    public function clear() {
        unset($mapArray);
        unset($sum);

        return view('clear');
    }
    
}
    

