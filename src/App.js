import React, { Component } from 'react';
import './stylesheets/_antd.css';
import { Drawer } from './components/menu/Drawer'
import { MessagesField } from './components/messages/MessagesField'
import { MessageInput } from './components/messages/MessageInput'
import { LabeledAvatar } from './components/users/LabeledAvatar'
import { Layout, Menu, Icon, Button } from 'antd';
import { Message } from './components/messages/Message'
import { message } from 'antd'
import { SideMenu } from './components/menu/SideMenu'
import { MainScreen } from './screens/MainScreen'

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  // uri: 'https://us-central1-graphql-test-f4474.cloudfunctions.net/graphql',
  uri: 'http://localhost:5000/graphql-test-f4474/us-central1/graphql'
});

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

  }

  render() {

    
    const users=[{name: 'John Wayne', id: '1'}, {name: 'John Marston', id: '2'}]

    if(!this.state.logged){
      return(
      <ApolloProvider client={client} >

        <MainScreen />

        </ApolloProvider>
      )
    }

    return(
      <ApolloProvider client={client} >
    <Layout
      style={{
        height: '100vh'
      }}
    >
      <Drawer>
        <SideMenu
          users={users}
        />
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
          <Button type="primary" icon="download" 
            style={{
            overflow: 'hidden'
            }}
          >
            Logout
          </Button>
        </div>
    </Drawer>

      <Layout style={{display: 'flex', flexDirection: 'column'}}>

        <MessagesField />
        <MessageInput />
      </Layout>
    </Layout>
</ApolloProvider>
    )
    
  }
}

export default App