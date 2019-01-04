import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sysTime: ""
    };
  }
  componentWillMount() {
    this.state = {
      username: "章三"
    };

    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime()); // 每隔一秒刷新一次
      this.setState({
        sysTime
      });
    }, 1000);
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>登陆,{this.state.username}</span>
            <a herf="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">多云</span>
          </Col>
        </Row>
      </div>
    );
  }
}
