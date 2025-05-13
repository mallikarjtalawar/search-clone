import React from 'react';
// Import the loader component from react-loader-spinner
import { Puff } from 'react-loader-spinner';

function Loading() {
  return (
    <div className='flex justify-center items-center'>
      {/* Use the Puff loader component with the desired props */}
      <Puff color="#00BFFF" height={550} width={80} />
    </div>
  );
}

export default Loading;