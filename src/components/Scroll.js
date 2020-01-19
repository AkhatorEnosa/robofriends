import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '550px', boxShadow:  '0px 0px 10px rgb(2, 163, 116)'}}>
      {props.children}
    </div>
  );
};

export default Scroll;