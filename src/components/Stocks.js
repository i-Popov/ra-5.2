/* Stocks
 */

import React from 'react';
// import PropTypes from 'prop-types';

export default function Stocks() {
  return (
    <React.Fragment>
      <a href='/#'>USD MOEX</a>
      <span className='stock-value'>63.52</span>
      <span className='stock-change'>+0.09</span>
      <a href='/#'>EUR MOEX</a>
      <span className='stock-value'>70.86</span>
      <span className='stock-change'>+0.14</span>
      <a href='/#'>Нефть</a>
      <span className='stock-value'>64.90</span>
      <span className='stock-change'>+1.63%</span>
    </React.Fragment>
  );
}
