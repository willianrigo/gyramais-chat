import React,{useState} from 'react'
import { useMutation } from '@apollo/react-hooks'
import moment from 'moment';
import { ADD_MESSAGE } from './../../api/queries'

const MessageInput = (props) => {

  let input;
  const [addMessage, { data }] = useMutation(ADD_MESSAGE)
  
      return (
        <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addMessage({ variables: { 
            data: input.value, 
            author: props.username,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
          } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
      );
    }

export { MessageInput }