import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomepageGrid, ItemsGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';

function CurrentylSlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters on</span>
      </h2>
      <p>Standing by, ready to slice you up</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p> No one is working right now </p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot slices on</span>
      </h2>
      <p>Come on by, buy the slice</p>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p> Nothing in the case </p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
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
