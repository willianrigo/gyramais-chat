import React from 'react'
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const Message = ({avatarId}) => {

return( 
    <Comment
        style={{padding: 10}}
        author={<a>Han Solo</a>}
        avatar={
        <Avatar
        src={`https://api.adorable.io/avatars/108/${avatarId}.png`} 
            alt="Han Solo"
        />
        }
        content={
        <p style={{textAlign: 'left'}}>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
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