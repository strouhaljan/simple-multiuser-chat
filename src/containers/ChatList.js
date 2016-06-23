import { connect } from 'react-redux'
import { activateChat } from '../actions'
import Chats from '../components/Chats'

const markActiveChat = (chats, activeChat) => {
  chats.map(chat => {
    chat.active = (chat.id === activeChat)
    return chat
  })

  return chats
}

const mapStateToProps = (state) => {
  return {
    chats: markActiveChat(state.chats, state.activeChat)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChatLinkClick: (id) => {
      dispatch(activateChat(id))
    }
  }
}

const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats)

export default ChatList
