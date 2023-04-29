import React from 'react';
import Box from './Box';

const BoxContainer = ({ numBoxes }) => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const boxes = [];

  for (let i = 0; i < numBoxes; i++) {
    boxes.push(<Box key={i} />);
  }

  return (
    <div style={boxStyle}>
      {boxes.map(box => (
        <div key={box.key} style={{ margin: '0 10px' }}>
          {box}
        </div>
      ))}
    </div>
  );
};

export default BoxContainer;
