import React from 'react'
import { Layout, Form, Button, Icon, Input, Avatar } from 'antd';
import '../.././stylesheets/_avatar.css';

const { Content } = Layout;

const Settings = (props) => {

    return(
        <Content style={{overflow: 'hidden'}}>
            <h2 style={{textAlign: 'center'}}>Escolha um avatar</h2>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                
                <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/1.png"/>
                <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/2.png"/>
                <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/3.png"/>
                <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/4.png"/>
                <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/5.png"/>
                <Avatar className='selectable-avatar' shape="square"  src="https://api.adorable.io/avatars/108/6.png"/>

            </div>

                <Form className="login-form" style={{height: '50%', alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Escolha um apelido</h2>
                        
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Apelido"
                    />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Atualizar
                </Button>
                </Form.Item>
            </Form>
            </Content>
    )
}

export { Settings }