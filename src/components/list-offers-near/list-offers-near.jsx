import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propTypes/offer";
import CardNear from "../near-card/near-card";

const ListOffersNear = ({offersNearby}) => {
  return (
    <div className="near-places__list places__list">
      {offersNearby.map(function (item, index) {
        return (< CardNear
          key={`cardNear-` + index}
          offer={item}
        />);
      })}
    </div>
  );
};

ListOffersNear.propTypes = {
  offersNearby: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default ListOffersNear;
