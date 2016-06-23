import { connect } from 'react-redux'
import Chat from '../components/Chat'

const getVisibleMessages = (messages, activeChat) => {
  return messages.filter(message => message.chatId === activeChat)
}

const getUserNames = (messages, users) => {
  messages.forEach(message => {
    users.forEach(user => {
      if (user.id === message.user) {
        message.userName = user.name
      }
    })
  })

  return messages
}

const mapStateToProps = (state) => {
  return {
    messages: getUserNames(getVisibleMessages(state.messages, state.activeChat), state.users)
  }
}

const ChatMessages = connect(
  mapStateToProps,
  null
)(Chat)

export default ChatMessages
