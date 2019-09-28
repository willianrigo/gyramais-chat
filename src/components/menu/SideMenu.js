import React from 'react'
import { Menu, Icon } from 'antd'
import { LabeledAvatar } from './../users/LabeledAvatar'
import { useQuery } from '@apollo/react-hooks';
import { USERS } from './../../api/queries'

const SideMenu = () => {

    const { loading, error, data } = useQuery(USERS,
        {pollInterval: 1000}
    );

    /* Menu subcomponents cannot be wrapped --> https://github.com/ant-design/ant-design/issues/4853 */

    return(
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
        style={{
            overflowY: 'scroll',
            height: '100%'
        }}
    >

    {loading || !data ? 
    null :
    <Menu.SubMenu title="Últimos usuários">
        {data.users.reverse().map((user, index) => {
            return(
                <LabeledAvatar name={user.name} id={user.avatarId} key={index}/>
            )
        })}
  
        </Menu.SubMenu>
    }
    </Menu>
)}

export { SideMenu }