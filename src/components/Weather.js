/* Search
 */

import React from 'react';
// import PropTypes from 'prop-types';

export default function Weather() {
  const weather = {
    pic: 'rain',
    now: '+17',
    morning: '+17',
    afternoon: '+20',
  };

  return (
    <React.Fragment>
      <div className='temperature'>
        <div>
          <img src='' alt={weather.pic} />
          {weather.now}
        </div>
        <div className='weather-future'>
          <span>Утром {weather.morning}</span>
          <span>Днём {weather.afternoon}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
