import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomepageGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';

function CurrentylSlicing({ slicemasters }) {
  return (
    <div>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p> No one is working right now </p>
      )}
      {/* <p>Currentyl Slicing</p> */}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      {/* <p>Hot slices</p> */}
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p> Nothing in the case </p>}
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h1>The Best pizza Downtown</h1>
      <p>Open 11am to 11pm Every single day</p>
      <HomepageGrid>
        <CurrentylSlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomepageGrid>
    </div>
  );
}
