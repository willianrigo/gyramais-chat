import React from 'react'
import { Layout } from 'antd';
import { Message } from './Message'

const { Content } = Layout;

const MessagesField = ({children}) => {

return(
<Content style={{  overflowY: 'scroll'}}>
        <div style={{ background: '#fff', textAlign: 'center', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
          
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
