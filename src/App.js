import React, { Component } from 'react';
import './stylesheets/_antd.css';
import { Drawer } from './components/menu/Drawer'
import { OptionsList } from './components/menu/OptionsList'
import { MessagesField } from './components/messages/MessagesField'
import { MessageInput } from './components/messages/MessageInput'
import { NamedAvatar } from './components/users/NamedAvatar'
import { Layout, Menu, Icon, Button } from 'antd';
import { Message } from './components/messages/Message'
import { Settings } from './components/settings/Settings'
import { message } from 'antd'


const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
    logged: false
  };

  success = () => {
    message.info('John Wayne entrou no chat');
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount(){
    this.success()
    setTimeout(this.success(), 4000)
    setTimeout(this.success(), 8000)

  }

  render() {
    return(
    <Layout
      style={{
        height: '100vh'
      }}
    >
      <Drawer>
      <OptionsList
        options={[{icon: "wechat", name: "Chat"}, {icon: "setting", name: "Configurações"}]}
      >
      
        <Menu.SubMenu title="Participantes">
          <NamedAvatar name="John Wayne" id='3'/>
          <NamedAvatar name="John Wayne" id='4'/>
          <NamedAvatar name="John Wayne" id='5'/>
          <NamedAvatar name="John Wayne" id='3'/>
          <NamedAvatar name="John Wayne" id='4'/>
          <NamedAvatar name="John Wayne" id='5'/>
          <NamedAvatar name="John Wayne" id='3'/>
          <NamedAvatar name="John Wayne" id='4'/>
          <NamedAvatar name="John Wayne" id='5'/>
          <NamedAvatar name="John Wayne" id='3'/>
          <NamedAvatar name="John Wayne" id='4'/>
          <NamedAvatar name="John Wayne" id='5'/>
          
        </Menu.SubMenu>
       
        <Menu.Item key="3" style={{
          position: 'absolute', 
          bottom: '0',
          overflow: 'hidden'
        }}>
          {/* <Button type="primary" icon="download" 
            style={{
            overflow: 'hidden'
            }}
          >
          Download
        </Button> */}
        </Menu.Item>
        </OptionsList>
    </Drawer>

      <Layout style={{display: 'flex', flexDirection: 'column'}}>

        {!this.state.logged ? <MessagesField /> : <Settings />}
        
        <MessageInput />
      </Layout>
    </Layout>

    )
    
  }
}

export default App