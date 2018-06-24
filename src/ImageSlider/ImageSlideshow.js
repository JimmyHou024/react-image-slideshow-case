import React from "react";

export default class ImageSlideshow extends React.Component {
  state = {
    selectedIndex: 0
  };

  componentDidMount() {
    const imageWidth = Number(
      window.getComputedStyle(this.innerBoxDom).width.split("px")[0]
    );
    this.innerBoxDom.style.transform = `translateX(-${imageWidth *
      (this.state.selectedIndex + 1)}px)`;
  }

  selectImage = newSelectedIndex => {
    const imageWidth = Number(
      window.getComputedStyle(this.innerBoxDom).width.split("px")[0]
    );
    const transitionDuration =
      0.2 * Math.abs(newSelectedIndex - this.state.selectedIndex);
    // 先加上動畫效果
    this.innerBoxDom.style.transition = `transform ${transitionDuration}s cubic-bezier(0.23, 1, 0.32, 1)`;

    const { selectedIndex } = this.state;
    const { imageList } = this.props;

    // 移動 圖片顯示的位置
    this.innerBoxDom.style.transform = `translateX(-${imageWidth *
      (newSelectedIndex + 1)}px)`;

    // 若是超過圖片數量將圖片回到第一張
    if (selectedIndex + 1 > imageList.length) {
      newSelectedIndex = 1;
    } else if (selectedIndex - 1 < 0) {
      newSelectedIndex = imageList.length;
    }

    window.setTimeout(() => {
      // 當上一個動畫結束時，取消動畫效果，以便後續偷換圖片位置
      this.innerBoxDom.style.transition = "";

      // 若是超過圖片數量將圖片回到第一張的位置
      if (selectedIndex + 1 > imageList.length) {
        this.innerBoxDom.style.transform = `translateX(-${imageWidth * 1}px)`;
      } else if (selectedIndex - 1 < 0) {
        this.innerBoxDom.style.transform = `translateX(-${imageWidth *
          imageList.length}px)`;
      }
    }, transitionDuration * 1000);

    this.setState({
      selectedIndex: newSelectedIndex
    });
  };

  render() {
    const { selectedIndex } = this.state;

    return (
      <div className="ImageContainer">
        <div
          className="innerBox"
          ref={div => {
            this.innerBoxDom = div;
          }}
        >
          <div className="imgBox fakeImgBox">
            <img src={this.props.imageList[this.props.imageList.length - 1]} />
          </div>
          {this.props.imageList.map(url => (
            <div className="imgBox">
              <img src={url} />
            </div>
          ))}
          <div className="imgBox fakeImgBox">
            <img src={this.props.imageList[0]} />
          </div>
        </div>

        <span
          className="prev"
          onClick={() => this.selectImage(selectedIndex - 1)}
        />
        <span
          className="next"
          onClick={() => this.selectImage(selectedIndex + 1)}
        />
        <div className="imgSelection">
          {this.props.imageList.map((url, index) => (
            <span
              className={`imgSelectionDot ${
                selectedIndex === index ? "selected" : ""
              }`}
              onClick={() => this.selectImage(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
