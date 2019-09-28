import React, {useState} from 'react'
import { Layout, Form, Button, Icon, Input, Avatar } from 'antd';
import { useMutation } from '@apollo/react-hooks'
import './../stylesheets/_avatar.css';
import './../api/queries'
import { ADD_USER } from './../api/queries'
import { ChatScreen } from './ChatScreen'

const { Content } = Layout;

const MainScreen = (props) => {

    const [avatarId, setAvatarId] = useState(0)
    const [username, setUsername] = useState(false)
    const [userLogged, setUserLogged] = useState('')

    const [addUser] = useMutation(ADD_USER)

    const handleAddUser = () => {
        addUser({ 
        variables: { 
            name: username, 
            token: '123123',
            avatarId: avatarId
          } });

        setUserLogged(true)
    }

    console.log('username: ', username)

    if(userLogged){
        return(
            <ChatScreen username={username}/>
        )
    }

    return(
        <Content style={{overflow: 'hidden'}}>
            <h2 style={{textAlign: 'center'}}>Escolha um avatar</h2>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                
                <div onClick={() => {setAvatarId(1)}}>
                    <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/1.png"/>
                </div>
                <div onClick={() => {setAvatarId(2)}}>
                    <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/2.png"/>
                </div>
                <div onClick={() => {setAvatarId(3)}}>
                    <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/3.png"/>
                </div>
                <div onClick={() => {setAvatarId(4)}}>
                    <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/4.png"/>
                </div>
                <div onClick={() => {setAvatarId(5)}}>
                    <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/5.png"/>
                </div>
                <div onClick={() => {setAvatarId(6)}}>
                    <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/6.png"/>
                </div>
            </div>

                <Form className="login-form" style={{height: '50%', alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Escolha um apelido</h2>
                        
                <Form.Item>
                    <Input
                        onChange={(e) => {setUsername(e.target.value)}}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Apelido"
                    />
                </Form.Item>
                <Form.Item>
                <Button onClick={() => {handleAddUser()}} type="primary" htmlType="submit" className="login-form-button">
                    Participar do chat
                </Button>
                </Form.Item>
            </Form>
            </Content>
    )
}

export { MainScreen }