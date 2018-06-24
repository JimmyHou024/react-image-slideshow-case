import React from "react";
import "./ImageSlider.css";

export default class ImageShowcase extends React.Component {
  render() {
    console.log(this.props.ImageList);
    return (
      <div className="ImageShowcase">
        <div className="innerBox">
          <div className="imgBox">10</div>
          <div className="imgBox">11</div>
          <div className="imgBox">12</div>
          <div className="imgBox">13</div>
          <div className="imgBox">14</div>
          <div className="imgBox">15</div>
          <div className="imgBox">10</div>
        </div>
      </div>
    );
  }
}
