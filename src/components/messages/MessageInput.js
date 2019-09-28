import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Input, Button, Row, Col, Layout } from 'antd'
import moment from 'moment';
import { ADD_MESSAGE } from './../../api/queries'

const { TextArea } = Input
const { Content } = Layout

const MessageInput = () => {
  let input;
  const [addMessage, { data }] = useMutation(ADD_MESSAGE)

      return (
        <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addMessage({ variables: { 
            data: input.value, 
            author: 'willian',
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