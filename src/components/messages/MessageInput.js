import React from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'
import { Input, Button, Row, Col, Layout } from 'antd'
import moment from 'moment';


const { TextArea } = Input
const { Content } = Layout

const ADD_MESSAGE = gql`
  mutation AddMessage(
      $data: String, $author: String,
       $timestamp: String
    ) {
    addMessage(data: $data, author: $author, 
      timestamp: $timestamp) {
      data
      author
      timestamp
    }
  }
`;

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