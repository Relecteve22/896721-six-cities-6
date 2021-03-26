import React from "react";
import PropTypes from "prop-types";
import {reviewsPropTypes} from "../../propTypes/review";
import Review from "../review/review";

const ListReviews = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map(function (item, index) {
        return (<Review
          key={`review-` + index}
          review={item}
        />);
      })}
    </ul>
  );
};

ListReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropTypes).isRequired
};

export default ListReviews;
