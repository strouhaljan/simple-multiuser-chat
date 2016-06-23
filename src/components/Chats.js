import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ChatLink from '../containers/ChatLink'

const Chats = ({ chats, onChatLinkClick }) => (
  <ul>
    {chats.map(chat =>
      <li key = {chat.id}>
        <ChatLink
          key = {chat.id}
          {...chat}
          onClick = {() => onChatLinkClick(chat.id)} >
          {chat.name}
        </ChatLink>
      </li>
    )}
  </ul>
)

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onChatLinkClick: PropTypes.func.isRequired
}

export default Chats
