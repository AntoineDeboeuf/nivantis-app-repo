import React from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

const MyMap = () => 
    <ReactGoogleMapLoader
        params={{
            key: "AIzaSyCI3cDduwloUnVSfREo-6wuRYTMjOHcQjc",
            libraries: "places,geometry",
        }}
        render={googleMaps =>
            googleMaps && (
              <div style={{height: "800px"}}>
                <ReactGoogleMap
                  googleMaps={googleMaps}
                  center={{lat: 43.604363, lng: 1.443363}}
                  zoom={8}
                />
              </div>
            )}
    />

    export default MyMap