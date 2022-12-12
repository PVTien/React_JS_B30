import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";
import "./style.css";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Item />
        <Footer />
      </div>
    );
  }
}
