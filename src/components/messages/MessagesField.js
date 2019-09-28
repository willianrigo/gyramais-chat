import React from 'react'
import { Layout } from 'antd';
import { Message } from './Message'
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import { MESSAGES } from './../../api/queries'

const { Content } = Layout;

//Component which will serve as the area to display all the messages sent to the chat, rendering an array of <Message /> component
const MessagesField = ({children}) => {

const { loading, error, data } = useQuery(MESSAGES,
  {pollInterval: 500}
  );

if(!loading) console.log(data)
return(
    <Content style={{  overflowY: 'scroll'}}>
      <div style={{ background: '#fff',
        textAlign: 'center',
        minHeight: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end'
      }}>
      
      {loading || !data ? null : 


      data.messages.map((message, index) => {
        return(
        <Message
           avatarId={message.avatarId}
          data={message.data}
          author={message.author}
          timestamp={message.timestamp}
          key={index}
        /> 
        )
      })
    }
      </div>
    </Content>
)
}

export { MessagesField }
