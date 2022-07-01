/* Основные блоки
 */

import React from 'react';
import PropTypes from 'prop-types';

export default function Block(props) {
  const { className } = props;

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
