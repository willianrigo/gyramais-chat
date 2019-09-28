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

const MESSAGES = gql`
  {
    messages{
      data
      author
      timestamp
    }
  }
`

export { ADD_USER, ADD_MESSAGE, MESSAGES}