import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./hero/HomePage";
import "antd/dist/antd.css";
import ShopPage from "./shop/ShopPage";

import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import MyHeader from './components/MyHeader';
import ProductPage from "./product/ProductPage";

const { Title } = Typography;


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Layout>
          <MyHeader />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>Footer</Footer>
        </Layout>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
