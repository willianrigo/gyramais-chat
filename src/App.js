import React, { Component } from 'react';
import './stylesheets/_antd.css';
import { Drawer } from './components/menu/Drawer'
import { OptionsList } from './components/menu/OptionsList'
import { Option } from './components/menu/Option'


import { Layout, Menu, Icon, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return(<Drawer>

      {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
      style={{
        overflowY: 'scroll',
        height: '100%'
      }}
      > */}
      <OptionsList>
        {/* <Option iconType="video-camera" name="opcao" key="1"/> */}
        <Menu.Item key="1">
          <Icon type="wechat"/>
          <span className="nav-text">Chat</span>
        </Menu.Item>

        <Menu.Item key="2">
          <Icon type="setting" />
          <span className="nav-text">Configurações</span>
        </Menu.Item>

        <Menu.SubMenu>
          <Icon type="setting" />
          <span className="nav-text">Configurações</span>
        </Menu.SubMenu>

        <Menu.Item key="3" style={{
          position: 'absolute', 
          bottom: '0',
          overflow: 'hidden'
        }}>
          <Button type="primary" icon="download" 
            style={{
            overflow: 'hidden'
            }}
          >
          Download
        </Button>
        </Menu.Item>

        

        {/* <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Chat</span>
        </Menu.Item>
        
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5"
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Icon type="user" />
          <span className="nav-text">Logout</span>
        </Menu.Item> */}
        </OptionsList>
    </Drawer>)

    
    return (
      <Layout>
      <Sider
      
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          overflowY: 'none',
          overflowX: 'none',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
        style={{
          overflowY: 'scroll',
          height: '100%'
        }}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Chat</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5"
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          >
            <Icon type="user" />
            <span className="nav-text">Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflowY: 'scroll' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360, maxHeight: 500 }}>content
        
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content     </div>   </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    );
  }
}

export default App