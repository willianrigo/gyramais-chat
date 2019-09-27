import React from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'
import { Input, Button, Row, Col, Layout } from 'antd'
const { TextArea } = Input
const { Content } = Layout

const ADD_MESSAGE = gql`
  mutation AddMessage($type: String!) {
    addMessage(type: $type) {
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
          addMessage({ variables: { type: input.value } });
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