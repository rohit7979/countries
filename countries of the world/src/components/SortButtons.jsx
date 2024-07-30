import React from 'react';

const SortButtons = ({ onSort }) => {
  return (
    <div>
      <button onClick={() => onSort('asc')}>Sort A-Z</button>
      <button onClick={() => onSort('desc')}>Sort Z-A</button>
    </div>
  );
};

export default SortButtons;
