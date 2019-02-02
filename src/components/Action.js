import React from 'react';

const Action = (props) => {
  return (
      <button
          onClick={props.decision}
          disabled={!props.hasOptions}>
          What should I do?
      </button>
  );
};

export default Action;