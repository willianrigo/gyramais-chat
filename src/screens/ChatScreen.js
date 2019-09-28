import React, { Component } from 'react';
import './../stylesheets/_antd.css';
import { Drawer } from './../components/menu/Drawer'
import { MessagesField } from './../components/messages/MessagesField'
import { MessageInput } from './../components/messages/MessageInput'
import { Layout } from 'antd';
import { SideMenu } from './../components/menu/SideMenu'

const ChatScreen = (props) => {

return(

    <Layout
        style={{
            height: '100vh'
        }}
        >
        <Drawer>
            <SideMenu
            users={props.users}
            />
        </Drawer>

            <Layout style={{display: 'flex', flexDirection: 'column'}}>
                <MessagesField />
                <MessageInput username={props.username} avatarId={props.avatarId}/>
            </Layout>
        </Layout>
    )

}

export { ChatScreen }