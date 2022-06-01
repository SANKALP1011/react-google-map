import React from "react";
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
import { useState , useRef } from "react";

export const Map = () =>{
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
    })

    const center = { lat: 48.8584, lng: 2.2945 }

    const [map,setMap] = useState((null));
    const [Route,setRoute] = useState(null);
    const [distance,setDistance] = useState('');
    const [timetoReach,settimetoReach] = useState('');

    const StartDestination = useRef();
    const EndDestination = useRef();

    if(!isLoaded){
        return<div>..nkhj </div>
        
    }
    return <>
         <div>
               <GoogleMap
               zoom={5}
                  center={{lat: 28.7041, lng: 77.1025}}
                  mapContainerClassName="MapBox"
                  options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                   fullscreenControl: false,
                }}
                >
          <Marker/>
          {/* {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )} */}
        </GoogleMap>
         </div>
    </>
};
export default Map;