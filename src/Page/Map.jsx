/* eslint-disable no-undef */
import React from "react";
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
  } from '@react-google-maps/api'
import { useState , useRef } from "react";
import {BlueButton} from "../Componenst/BlueButton"
import { TopBar } from "../Componenst/TopBar";
import {DistanceBox} from "../Componenst/DistanceBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Map = () =>{
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        location: ['places']
    })

    const center = { lat: 28.7041, lng: 77.1025}

    const [map,setMap] = useState((null));
    const [Route,setRoute] = useState(null);
    const [distance,setDistance] = useState('');
    const [timetoReach,settimetoReach] = useState('');
    
    const [distanceBox,setDistanceBox] = useState(false);

    const StartDestination = useRef(null);
    const EndDestination = useRef(null);

    if(!isLoaded){
        return<div> There was an error while loading the map. </div>
        
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
    }

    return <>
    <TopBar/>
         <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
           <div className="Content">
             <div className="InputDiv">
               <div className="TextFieldBox">
               <input className="TextField1 shadow-md" type="text" placeholder="Origin" ref={StartDestination}/>
                    <input className="TextField2 shadow-md" type="text" placeholder="Destination" ref={EndDestination}/>
                 </div>
                 <BlueButton handler={()=>{CalculateDistance(); setDistanceBox(true)}} label={<h3>Calculate</h3>}/>
              </div>
              {distanceBox === true && <DistanceBox distance={distance} duration={timetoReach}/>}
           </div>
               <GoogleMap
                  zoom={15}
                  center={center}
                  mapContainerClassName="MapBox shadow-lg"
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

         </div>
    
    </>
};
export default Map;