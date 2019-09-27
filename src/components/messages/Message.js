import React from 'react'
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';


//Structure of a message
const Message = ({avatarId, author, data, timestamp}) => {

return( 
    <Comment
        style={{padding: 10}}
        author={<a>{author}</a>}
        avatar={
        <Avatar
        src={`https://api.adorable.io/avatars/108/${avatarId}.png`} 
            alt={author}
        />
        }
        content={
        <p style={{textAlign: 'left'}}>
            {data}
        </p>
        }
        datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
        </Tooltip>
        }
    />
    )
}

export { Message }