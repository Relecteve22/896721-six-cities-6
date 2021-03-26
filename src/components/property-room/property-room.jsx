import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propTypes/offer";
import Menu from "../menu/menu";
import CommentForm from "../form-post-comment/form-post-comment";
import MapPropertyRoom from "../map-property-room/map-property-room";
import ListOffersNear from "../list-offers-near/list-offers-near";
import HostComment from "../host-comment/host-comment";
import ListReviews from "../list-reviews/list-reviews";

const PropertyRoom = ({offer, offersNearby, reviews}) => {
  const {maxAdults, bedrooms, isFavorite, rating, title, isPremium, images, type, price, goods} = offer;

  const ratingInPercentages = ((rating / 5) * 100) + `%`;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <Menu />
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map(function (item, index) {
                return (
                  <React.Fragment key={`property-image-` + index}>
                    <div className="property__image-wrapper">
                      <img className="property__image" src={item} alt={`Photo ` + type} />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ` + (isFavorite && `property__bookmark-button--active`)} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingInPercentages}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map(function (item, index) {
                    return (
                      <React.Fragment key={`property__inside-item-` + index}>
                        <li className="property__inside-item">
                          {item}
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
              <HostComment />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ListReviews
                  reviews={reviews}
                />
                <CommentForm />
              </section>
            </div>
          </div>
          <MapPropertyRoom
            offerActive={offer}
            offersNearby={offersNearby}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffersNear
              offersNearby={offersNearby}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyRoom.propTypes = {
  offer: offerPropTypes,
  offersNearby: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default PropertyRoom;
