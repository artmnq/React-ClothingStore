import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="itemBlock"
    speed={2}
    width={280}
    height={550}
    viewBox="0 0 280 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="346" />
    <rect x="0" y="355" rx="10" ry="10" width="280" height="56" />
    <rect x="0" y="431" rx="10" ry="10" width="280" height="54" />
    <rect x="165" y="503" rx="20" ry="20" width="107" height="43" />
    <rect x="0" y="503" rx="10" ry="10" width="94" height="43" />
  </ContentLoader>
);

export default Skeleton;
