import React from 'react';
import './stylesheets/_antd.css';
import { Layout } from 'antd';
import { message } from 'antd'
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

    if(!this.state.logged){
      return(
      <ApolloProvider client={client} >

        <MainScreen />

        </ApolloProvider>
      )
    }

    return(
      <ApolloProvider client={client} >
    
</ApolloProvider>
    )
    
  }
}

export default App