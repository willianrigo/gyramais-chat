import React from 'react';
// import './../../stylesheets/_antd.css';
import { Menu, Icon } from 'antd';


const OptionsList = ({options, children}) => {
    return(
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
        style={{
          overflowY: 'scroll',
          height: '100%'
        }}
      >
          {options.map((option, index) => {
            return(
              <Menu.Item key={index}>
                <Icon type={option.icon}/>
                <span className="nav-text">{option.name}</span>
              </Menu.Item>
            )
          })}
          {children}
      </Menu>
    )
}

export {OptionsList};