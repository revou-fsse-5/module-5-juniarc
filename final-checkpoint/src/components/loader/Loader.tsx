import React from 'react';

interface LoaderType {
  width: string;
  height: string;
}

function Loader({ width, height} : LoaderType) {
  return (
    <div className={width + " " + height}>
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
