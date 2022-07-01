import React from 'react';
import PropTypes from 'prop-types';

export default function Teaser(props) {
  const {
    img,
    href,
    title,
    text,
  } = props;

  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} alt="img" />
        <h2>{title}</h2>
      </a>
      <span>{text}</span>
    </React.Fragment>
  );
}

Teaser.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
