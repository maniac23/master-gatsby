import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentylSlicing() {
  return (
    <div>
      <p>CurrentylSlicing</p>
    </div>
  );
}

function HotSlices() {
  return (
    <div>
      <p>Hot slices</p>
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h1>The Best pizza Downtown</h1>
      <p>Open 11am to 11pm Every single day</p>
      <CurrentylSlicing slicemasters={slicemasters} />
      <HotSlices hotSlices={hotSlices} />
    </div>
  );
}
