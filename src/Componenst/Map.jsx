/* eslint-disable no-undef */
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
        location: ['places']
    })

    const center = { lat: 28.7041, lng: 77.1025}

    const [map,setMap] = useState((null));
    const [Route,setRoute] = useState(null);
    const [distance,setDistance] = useState('');
    const [timetoReach,settimetoReach] = useState('');

    const StartDestination = useRef();
    const EndDestination = useRef();

    if(!isLoaded){
        return<div>..nkhj </div>
        
    }

    async function CalculateDistance(){
      if(StartDestination.current.value === '' || EndDestination.current.value === ''){
        return;
      }
      const GoogleDirection = new google.maps.DirectionsService();
      const Results = await GoogleDirection.route({
        origin: StartDestination.current.value,
        destination: EndDestination.current.value,
        travelMode: google.maps.TravelMode.DRIVING
      })
      setRoute(Results);
      setDistance(Results.routes[0].legs[0].distance.text)
      settimetoReach(Results.routes[0].legs[0].duration.text);
      console.log("chkjhkj")
    }

    return <>
         <div>
               <GoogleMap
                  zoom={15}
                  center={center}
                  mapContainerClassName="MapBox"
                  options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                   fullscreenControl: false,
                }}
                >
          <Marker position={center}/>
          {Route && (
            <DirectionsRenderer directions={Route} />
          )}
        </GoogleMap>
             <input type="text" placeholder="oroigin" ref={StartDestination}/>
             <input type="text" placeholder="desti" ref={EndDestination}/>
             <button onClick={CalculateDistance} type="submit">Search</button>
         </div>
    
    </>
};
export default Map;