import React, { Component } from 'react';
import './../../stylesheets/_antd.css';
import { Layout } from 'antd';
const { Sider } = Layout;

const Drawer = ({children}) => {

    return(
        <Sider
        breakpoint="md"
        collapsedWidth="0"
        style={{
            height: '100vh',
        }}
        >
        {children}
        </Sider>
    )
}

export {Drawer};