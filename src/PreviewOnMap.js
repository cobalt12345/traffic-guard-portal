import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                <AnyReactComponent
                    lat={defaultProps.marker.lat}
                    lng={defaultProps.marker.lng}
                    text={defaultProps.marker.capture}
                />
            </GoogleMapReact>
        </div>
    );
}
