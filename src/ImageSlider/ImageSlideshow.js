import React from "react";

export default class ImageSlideshow extends React.Component {
  state = {
    selectedIndex: 1
  };

  componentDidMount() {
    const imageWidth = Number(
      window.getComputedStyle(this.innerBoxDom).width.split("px")[0]
    );

    this.innerBoxDom.style.transform = `translateX(-${imageWidth *
      this.state.selectedIndex}px)`;

    this.innerBoxDom.onclick = () => {
      const imageWidth = Number(
        window.getComputedStyle(this.innerBoxDom).width.split("px")[0]
      );
      const transitionDuration = 0.5;
      // 先加上動畫效果
      this.innerBoxDom.style.transition = `transform ${transitionDuration}s ease-in`;

      const { selectedIndex } = this.state;
      const { imageList } = this.props;
      let newSelectedIndex = selectedIndex + 1;

      // 移動 圖片顯示的位置
      this.innerBoxDom.style.transform = `translateX(-${imageWidth *
        newSelectedIndex}px)`;

      // 若是超過圖片數量將圖片回到第一張
      if (selectedIndex + 1 > imageList.length) {
        newSelectedIndex = 1;
      }

      window.setTimeout(() => {
        // 當上一個動畫結束時，取消動畫效果，以便後續偷換圖片位置
        this.innerBoxDom.style.transition = "";

        // 若是超過圖片數量將圖片回到第一張的位置
        if (selectedIndex + 1 > imageList.length) {
          this.innerBoxDom.style.transform = `translateX(-${imageWidth * 1}px)`;
        }
      }, transitionDuration * 1000);

      this.setState({
        selectedIndex: newSelectedIndex
      });
    };
  }
  render() {
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
      </div>
    );
  }
}
