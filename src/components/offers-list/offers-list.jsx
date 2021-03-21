import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propTypes/offer";
import Card from "../citites-card/cities-card";

const OffersList = (props) => {
  const {offers} = props;


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(function (item, index) {
        return (< Card
          key={`card-` + index}
          offer={item}
        />);
      })}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default OffersList;
