import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props: object) => (
  <ContentLoader
    speed={3}
    width={380}
    height={380}
    viewBox="0 0 380 380"
    backgroundColor="#24242d"
    foregroundColor="#3d3f4f"
    {...props}
  >
    <rect x="0" y="60" rx="2" ry="2" width="380" height="380" />
  </ContentLoader>
);

export default MyLoader;
