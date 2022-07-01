/* Список
 */

import React from 'react';
import PropTypes from 'prop-types';

export default function List(props) {
  const { className } = props;

  return (
    <ul className={className}>
      {props.children}
    </ul>
  );
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};
