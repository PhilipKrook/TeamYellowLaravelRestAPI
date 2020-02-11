<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Ship extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        
        return [
            'id' => $this->id,
            'shipName' => $this->shipName,
            'shipOrigin' => $this->shipOrigin,
            'shipClass' => $this->shipClass,
            'shipPrice' => $this->shipPrice
        ];
        
    }

    public function with($request) {
        return [
            'version' => '2.0.0',
            'coders' => 'Team Yellow'
        ];
    }
}
