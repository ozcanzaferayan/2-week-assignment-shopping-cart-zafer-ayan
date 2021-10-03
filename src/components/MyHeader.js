import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
export default function MyHeader() {
  return (
    <Header>
      <div className="logo" >
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Ecommerce</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/shop">Shop</Link></Menu.Item>
        <Menu.Item key="3">Stories</Menu.Item>
        <Menu.Item key="4">About</Menu.Item>
      </Menu>
    </Header>
  )
}
