import React, {useEffect, useRef} from "react";
import {offerPropTypes} from "../../propTypes/offer";
import PropTypes from "prop-types";
import leaflet from 'leaflet';

import "leaflet/dist/leaflet.css";

const MapPropertyRoom = ({offerActive, offersNearby}) => {
  const {city} = offerActive;
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map-property-room`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    const customIconActive = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize: [27, 39]
    });

    offersNearby.forEach((offer) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(offer.title);

      return () => {
        mapRef.current.remove();
      };
    });

    leaflet.marker({
      lat: offerActive.location.latitude,
      lng: offerActive.location.longitude
    },
    {
      icon: customIconActive
    })
    .addTo(mapRef.current)
    .bindPopup(offerActive.title);

  }, []);

  return (
    <section className="map" style={{
      width: `1144px`,
      height: `579px`,
      margin: `0 auto`,
      marginBottom: `50px`
    }}>
      <div id="map-property-room" style={{
        width: `100%`,
        height: `100%`
      }} ref={mapRef}></div>
    </section>
  );
};
MapPropertyRoom.propTypes = {
  offerActive: offerPropTypes,
  offersNearby: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default MapPropertyRoom;
