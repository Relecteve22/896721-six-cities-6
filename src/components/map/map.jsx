import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propTypes/offer";
import leaflet from 'leaflet';

import "leaflet/dist/leaflet.css";

const Map = ({offers}) => {
  const {city} = offers[0];
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
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

    offers.forEach((offer) => {
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
  }, []);

  return (
    <div className="cities__right-section">
      <div id="map" style={{
        height: `100%`,
        width: `100%`
      }} ref={mapRef}></div>
    </div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default Map;
