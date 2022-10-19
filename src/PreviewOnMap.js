import React from "react";
import GoogleMapReact from 'google-map-react';
import {default as Car} from '@material-ui/icons/DirectionsCar';
import {makeStyles} from "@material-ui/core/styles";

export default function SimpleMap(props){
    const useStyles = makeStyles(theme => ({
          popupMap: {
              height: Math.floor(window.innerHeight * 0.8),
              width: Math.floor(window.innerWidth * 0.8),
          }
    }));
    const classes = useStyles(props);
    return (
        // Important! Always set the container height explicitly
        <div className={classes.popupMap}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "..." }}
                defaultCenter={{lat: Number(props.centerLatitude), lng: Number(props.centerLongitude)}}
                center={{lat: Number(props.centerLatitude), lng: Number(props.centerLongitude)}}
                defaultZoom={props.zoom}

            >
                <Car color="secondary"
                    lat={Number(props.markerLatitude)}
                    lng={Number(props.markerLongitude)}
                />
            </GoogleMapReact>
        </div>
    );
}
