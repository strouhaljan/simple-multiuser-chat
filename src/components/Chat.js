import React, { PropTypes } from 'react'
import Message from '../components/Message'

const Chat = ({ messages }) => (
  <div>
    {messages.map(message =>
      <div key = {message.id}>
        <Message {...message} />
        <div style = {{ clear: 'both' }}>
        </div>
      </div>
    )}
  </div>
)

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Chat
