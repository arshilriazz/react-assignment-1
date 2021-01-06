import React from "react";
import GalleryGridImage from "../atoms/GalleryGridImage";

const GalleryGrid = () => {
  return (
    <div className="gallery">
      <GalleryGridImage number="1">
        https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg
      </GalleryGridImage>
      <GalleryGridImage number="2">
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsd0nSZmKYmc6GEVAs6lnxUwCMt7vje45HQ&usqp=CAU
      </GalleryGridImage>
      <GalleryGridImage number="3">
        https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg
      </GalleryGridImage>
      <GalleryGridImage number="4">
        https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg
      </GalleryGridImage>
      <GalleryGridImage number="5">
        https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg
      </GalleryGridImage>
      <GalleryGridImage number="6">
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wbOeJohkAmJZ9uamfJWLeK68PlxhZZ8stX-XvFpHp0F3lJJKX3UbIFfVyTE2WSd7QBj894ocK08OLn6hz-9o1fwOiTY8s68&usqp=CAU&ec=45732304
      </GalleryGridImage>
    </div>
  );
};

export default GalleryGrid;
