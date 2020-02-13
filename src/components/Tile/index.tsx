import React from 'react';

import './styles.css';

export default ({src}: {src: string}) => (
  <div className="tile">
    <img className="tile__img"
      src={src}
      alt="tile"
    />
  </div>
);
