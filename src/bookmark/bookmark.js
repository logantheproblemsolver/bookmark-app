import React from 'react';
import PropTypes from 'prop-types'
import './bookmark.css';

import Rating from '../rating/rating';

export default function Bookmark(props) {
  return (
    <div className="bookmark">
      <div className="bookmark__row">
        <div className="bookmark__title">
          <a 
            href={props.url} 
            target="_blank"
            rel="noopener noreferrer">
              {props.title}
            </a>
        </div>
        <Rating value={props.rating}/>
      </div>      
      <div className="bookmark__description">
        {props.description}
      </div>
    </div>
  ) 
}

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
  url: (props, propName, compnentName) => {
    const prop = props[propName];
    if(!prop) {
      return new Error(`${propName} is required in ${compnentName}. Validation failed`);
    }
    if (typeof prop != 'string') {
      return new Error(`Invalid prop, $propName} is expected to be a string in ${compnentName}. ${typeof prop} found.`)
    }
    if (prop.length < 5 || !prop.match(new RegExp(/^https?:\/\//))) {
      return new Error(`Invalid prop, ${propName} must be min length 5 and begin http(s)://. Validation failed.`)
    }
  },
  rating: PropTypes.number,
  description: PropTypes.string,
}

Bookmark.defaultProps = {
  rating: 1,
  description: "",
}