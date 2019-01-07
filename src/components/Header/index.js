import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";
import axios from "../../axios/index";

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
    this.getWeatherAPIData();
  }

  // 调用百度天气API接口
  getWeatherAPIData() {
    let city = "北京";
    axios
      .jsonp({
        url:
          // 此处有一问题，当用encodeURIComponent解析的时候，会出现解析不正确，读取不出
          // "http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
          "http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
      })
      .then(res => {
        if (res.status == "success") {
          let data = res.results[0].weather_data[0];
          this.setState({
            weather: data.weather,
            dayPictureUrl: data.dayPictureUrl
          });
        }
      });
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
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="天气" />
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
