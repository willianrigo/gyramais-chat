import React from 'react';
// import './../../stylesheets/_antd.css';
import { Menu } from 'antd';


const OptionsList = ({children}) => {
    return(
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
        style={{
          overflowY: 'scroll',
          height: '100%'
        }}
      >
          {children}
      </Menu>
    )
}

export {OptionsList};