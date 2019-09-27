import React from 'react'

import { Avatar } from 'antd'

const MessageAuthor = ({name, id}) => {
    return(
        <div>
            <Avatar size={46} src={`https://api.adorable.io/avatars/108/${id}.png`} style={{marginRight: 10}}/>
            <span>{name}</span>
        </div>
    )
}

export { MessageAuthor }