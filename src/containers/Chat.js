import { connect } from 'react-redux'
import { activateChat } from '../actions'
import Message from '../components/Messages'

const markActiveChat = (chats, activeChat) => {
  chats.map(chat => {
    chat.active = (chat.id === activeChat)
    return chat
  })

  return chats
}

const mapStateToProps = (state) => {
  return {
    messages: markActiveChat(state.chats, state.activeChat)
  }
}

const ChatList = connect(
  mapStateToProps,
  null
)(Message)

export default ChatList
