<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Ship;
use App\Http\Resources\Ship as ShipResource;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $ships = ship::all();

        return ShipResource::collection($ships);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ship = $request->isMethod('put') ? Ship::findOrFail($request->ship_id) : new Ship;

        $ship->id = $request->input('ship_id');
        $ship->shipName = $request->input('shipName');
        $ship->shipOrigin = $request->input('shipOrigin');
        $ship->shipClass = $request->input('shipClass');
        $ship->shipPrice = $request->input('shipPrice');

        if($ship->save()) {
            var_dump($ship);
            return new ShipResource($ship);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ship = Ship::findOrFail($id);
        
        return new ShipResource($ship);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ship = Ship::findOrFail($id);
        
        if($ship->delete()) {
            return new ShipResource($ship);
        }
    }
}
