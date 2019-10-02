import React from 'react';

const HorizonScroll = props => {
  return (
    <div
      style={{
        overflowX: 'scroll',
        overflowY: 'hidden',
        dispaly: 'none',
        height: '80%'
      }}
    >
      {props.children}
    </div>
  );
};
export default HorizonScroll;
