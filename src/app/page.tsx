import Image from "next/image";
import Gallery from "./gallery/components/Gallery/Gallery";
import { Fragment } from "react";
import ZoomableImage from "./gallery/components/Zoomable/Zoomable";

export default function Home() {
  return (
    <Fragment>
      <ZoomableImage />
      {/* <Gallery /> */}
    </Fragment>
  );
}
