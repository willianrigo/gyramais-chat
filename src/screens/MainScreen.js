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

    const handleAvatarClick = (id) =>{
        setAvatarId(id)

    }

    if(userLogged){
        return(
            <ChatScreen username={username} avatarId={avatarId}/>
        )
    }


    let avatars = []
    for(let i = 0; i < 6; i++){

        let className = 'selectable-avatar'
        if(avatarId === i){
            className = 'selectable-avatar selected'
        }

        avatars.push(
            <div onClick={() => {setAvatarId(i)}}>
                <Avatar key={i} className={className} shape="square"  src={`https://api.adorable.io/avatars/108/${i}.png`}/>
            </div>
        )
    }

    return(
        <Content style={{overflow: 'hidden'}}>
            <h2 style={{textAlign: 'center'}}>Escolha um avatar</h2>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                {avatars}
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