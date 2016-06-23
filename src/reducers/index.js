import { combineReducers } from 'redux'
import chats from './chats'
import activeChat from './activeChat'
import messages from './messages'
import users from './users'
import loggedUser from './loggedUser'

const chatApp = (state = {}, action) => {
  return {
    activeChat: activeChat(
      state.activeChat,
      state.chats,
      action
    ),
    chats: chats(
      state.chats,
      state.activeChat,
      action
    ),
    messages: messages(
      state.messages,
      state.activeChat,
      state.chats,
      state.loggedUser,
      action
    ),
    users: users(
      state.users,
      state.loggedUser,
      action
    ),
    loggedUser: loggedUser(
      state.loggedUser,
      action
    )
  }
}

export default chatApp
