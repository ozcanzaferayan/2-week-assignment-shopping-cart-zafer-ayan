import React from 'react'
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import MyHeader from '../components/MyHeader';

const { Title } = Typography;


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default function HomePage(props) {
  const location = useLocation();

  console.log(location)
  return (
    <Content>
      <Row justify="center" align="top">
        <Col span={12}>

          <Title style={{ textAlign: 'center' }}>Better clothing for the planet</Title>
          <Title level={5} style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida sapien non dolor iaculis, ut bibendum lorem pellentesque. Ut auctor maximus convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam posuere lacus eu diam viverra auctor. Phasellus eget sem vel ipsum venenatis mollis. Donec dolor urna, porta in metus in, eleifend dictum libero. Suspendisse consequat velit sit amet vulputate rutrum. Ut porta venenatis laoreet. Quisque id odio sit amet lorem tempus tempor a at massa. Vestibulum vel tortor non leo viverra condimentum quis vel felis. Cras malesuada nulla velit, vitae tincidunt orci rutrum ac. Fusce consequat orci vel ex tristiq.

          </Title>

          <Image
            width={'100%'}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>
    </Content>
  )
}
