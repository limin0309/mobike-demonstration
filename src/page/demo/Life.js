import React from "react";
import Child from "./Child";
import { DatePicker, Button } from "antd";
import "./index.less";
export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps(newProps) {
    console.log("will props" + newProps.name);
  }
  shouldComponentUpdate() {
    console.log("should update");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="content">
        <p> react生命周期 </p>
        <button onClick={this.handleAdd}> 点击一下 </button>
        <p> {this.state.count} </p> <DatePicker />
        <Button type="primary"> 按钮 </Button> <Child name="jack"> </Child>
      </div>
    );
  }
}
