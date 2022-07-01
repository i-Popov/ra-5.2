/* Элемент списка
 */

import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  const { item } = props;
  const classIcon = `${item.icon} list-icon`;
  return (
    <li>
      <a href={item.href}>
        {item.icon && <span className={classIcon}></span>}
        <span className='title'>{item.title}</span>
        <span className='text'>{props.children}</span>
      </a>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object,
  children: PropTypes.node,
};
