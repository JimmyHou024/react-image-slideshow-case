import React from "react";
import ImageShowcase from "./ImageShowcase";
import ImageSlideshow from "./ImageSlideshow";

const ImageList = [
  "https://picsum.photos/800/300?image=0",
  "https://picsum.photos/800/300?image=1",
  "https://picsum.photos/800/300?image=2",
  "https://picsum.photos/800/300?image=3",
  "https://picsum.photos/800/300?image=4",
  "https://picsum.photos/800/300?image=5",
  "https://picsum.photos/800/300?image=6",
  "https://picsum.photos/800/300?image=7",
  "https://picsum.photos/800/300?image=8",
  "https://picsum.photos/800/300?image=9",
  "https://picsum.photos/800/300?image=10"
];

export default class ImageSlider extends React.Component {
  render() {
    return (
      <div>
        ImageSlider
        <ImageSlideshow imageList={ImageList} />
        <ImageShowcase imageList={ImageList} />
      </div>
    );
  }
}
