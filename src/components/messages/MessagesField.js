import React from 'react'
import { Layout } from 'antd';
import { Message } from './Message'

const { Content } = Layout;


//Component which will serve as the area to display all the messages sent to the chat, rendering an array of <Message /> component
const MessagesField = ({children}) => {

return(
    <Content style={{  overflowY: 'scroll'}}>
      <div style={{ background: '#fff',
        textAlign: 'center',
        minHeight: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end'
      }}>
      
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />

      </div>
    </Content>
)
}

export { MessagesField }
