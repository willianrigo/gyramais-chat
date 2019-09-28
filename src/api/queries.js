import gql from 'graphql-tag';

const ADD_USER = gql`
  mutation AddUser(
      $name: String, $avatarId: Int,
       $token: String
    ) {
    addUser(name: $name, avatarId: $avatarId, 
        token: $token) {
      name
      avatarId
      token
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage(
      $data: String, $author: String,
       $timestamp: String, $avatarId: Int
    ) {
    addMessage(data: $data, author: $author, 
      timestamp: $timestamp, avatarId: $avatarId) {
      data
      author
      timestamp
      avatarId
    }
  }
`;

const MESSAGES = gql`
  {
    messages{
      data
      author
      timestamp
      avatarId
    }
  }
`

const USERS = gql`
  {
    users{
      name
      token
      avatarId
    }
  }
`

export { ADD_USER, ADD_MESSAGE, MESSAGES, USERS}