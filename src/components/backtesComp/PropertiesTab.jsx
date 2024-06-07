import React from 'react';

const PropertiesTab = ({ data }) => {
  return (
    <div className='bg-gray-900 p-5'>
      <div>Initial Capital: <span  class="text-green-400">{data.initialCapital}</span></div>
      <div>Data Range: <span  class="text-amber-200">{data.dataRange}</span> </div>
      <div>Symbol Info: <span  class="text-rose-400">{data.symbolInfo}</span> </div>
      <div>Start: <span class="text-blue-400">{data.start}</span></div>
      <div>End: <span class="text-green-400">{data.end}</span></div>
      <div>Duration: <span class="text-amber-400">{data.duration}</span></div>
    </div>
  );
};

export default PropertiesTab;
