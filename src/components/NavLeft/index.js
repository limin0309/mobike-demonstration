import React from "react";
import { Menu, Icon } from "antd";
import MenuConfig from "./../../config/menuConfig";
import "./index.less";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }

  // 菜单渲染;
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <div>{item.title}</div>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="../../resource/assets/logo-ant.svg" alt="logo" />
          <h1>MS</h1>
        </div>
        <Menu theme="dark">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
