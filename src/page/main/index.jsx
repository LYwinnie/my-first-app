import React from 'react';
import {Route} from 'react-router'
import { HashRouter as Router,Link } from "react-router-dom";
import {observer, inject} from 'mobx-react'
import {observable} from 'mobx'
import { Layout, Menu } from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined,UserOutlined,VideoCameraOutlined,UploadOutlined,} from '@ant-design/icons';
import axios from 'axios';
import mainStore from '@/store/mainStore.js';
import {$http} from '@/api/index.js'
import style from './index.scss'
const { Header, Sider, Content } = Layout;
@observer
class Main extends React.Component{
 @observable data = {
      collapsed: false,
    };
 componentDidMount(){
   $http.post('/v1/member/login',{"regionCode":"130","shopCode":"01","staffNumber":"qiu01"},).then(
     res=>{
       console.log(res.data.data);
     }
   )
 }
 toggle = () => {
    this.data.collapsed = !this.data.collapsed
  };
  render() {
    return(
      <div className="content">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.data.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.data.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default  Main;
