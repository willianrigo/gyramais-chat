import React from 'react'

import { Avatar } from 'antd'

const LabeledAvatar = ({name, id}) => {
    return(
        <div style={{padding: 15}}>
            <Avatar size={46} src={`https://api.adorable.io/avatars/108/${id}.png`} style={{marginRight: 10}}/>
            <span>{name}</span>
        </div>
    )
}

export { LabeledAvatar }