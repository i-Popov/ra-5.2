/* Заглавие блока в виде ссылки (ссылок)
 */

import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function TitleBlockHref(props) {
  const { items } = props;

  return (
    <React.Fragment>
      <h2>
        {items.map((item) => <a key={shortid.generate()} href={item.href}>{item.text}</a>)}
      </h2>
      {props.children}
    </React.Fragment>
  );
}

TitleBlockHref.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.node,
};
