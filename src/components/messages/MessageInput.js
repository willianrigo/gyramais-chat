import React,{useState} from 'react'
import { useMutation } from '@apollo/react-hooks'
import moment from 'moment';
import { ADD_MESSAGE } from './../../api/queries'

const MessageInput = (props) => {

  let input;
  const [addMessage, { data }] = useMutation(ADD_MESSAGE)
  
      return (
        <div >
      <form style={{width: '100%'}}
        onSubmit={e => {
          e.preventDefault();
          addMessage({ variables: { 
            data: input.value, 
            author: props.username,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
            avatarId: props.avatarId
          } });
          input.value = '';
        }}
      >
        <input style={{width: '80%'}}
          ref={node => {
            input = node;
          }}
        />
        <button style={{width: '20%'}}
         type="submit">Enviar</button>
      </form>
    </div>
      );
    }

export { MessageInput }