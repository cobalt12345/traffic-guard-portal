import React from "react";
import GoogleMapReact from 'google-map-react';
import {default as Car} from '@material-ui/icons/DirectionsCar';

export default function SimpleMap(props){
    const defaultProps = {
        center: props.center,
        zoom: props.zoom,
        marker: props.marker,
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '200px', width: '200px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "***REMOVED***" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Car color="secondary"
                    lat={defaultProps.marker.lat}
                    lng={defaultProps.marker.lng}
                />
            </GoogleMapReact>
        </div>
    );
}
