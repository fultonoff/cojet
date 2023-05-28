'use client'
import * as React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
const apiUrl = process.env.MAP_API
import Map, { Marker, NavigationControl, ScaleControl } from "react-map-gl";


const Maps = () => {
  const lng = 5.6037
  const lat = 0.1870

  return (
    <div className='h-full'>
       <Map className="w-full h-full"
        mapboxAccessToken = 'pk.eyJ1IjoiZnVsdG9uIiwiYSI6ImNsaTdjdGt2bDBudjMza2x1OWUwMTFjNHUifQ.rRf0D7aWfixmEU9ZcN1t2A'
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15
          
          
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
      <Marker longitude={lng} latitude={lat} >
        
    </Marker>
     
    

    <NavigationControl />
      </Map>
    </div>
  )
}

export default Maps











