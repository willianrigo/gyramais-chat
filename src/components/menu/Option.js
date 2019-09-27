import React from 'react'
import './../../stylesheets/_antd.css';
import { Menu, Icon } from 'antd'

const Option = ({iconType, key, name}) => {
    return(
        <Menu.Item key={key}>
            <Icon type={iconType} />
            <span className="nav-text">{name}</span>
        </Menu.Item>
    )
}

export { Option };