'use client'
import * as React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
const apiUrl = process.env.MAP_API
import Map, { Marker, NavigationControl, ScaleControl } from "react-map-gl";


const lng = -2
const lat = 8
const Maps = () => {

  return (
    <div className='h-full'>
       <Map className="w-full h-full"
        mapboxAccessToken = {process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -2,
          latitude: 8,
          zoom: 5
          
          
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
      <Marker longitude={lng} latitude={lat} >
        
    </Marker>
     
    

    <NavigationControl />
    <ScaleControl />
      </Map>
    </div>
  )
}

export default Maps











