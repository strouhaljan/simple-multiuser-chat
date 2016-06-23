import { getLastMessageId } from '../state/messages'

const getRandomUser = (chats, activeChatId) => {
  let randomUser = null
  chats.forEach(chat => {
    if (chat.id === activeChatId && chat.users.length > 0) {
      randomUser = chat.users[Math.floor(Math.random() * chat.users.length)]
    }
  })

  return randomUser
}

const message = (state, id, activeChatId, loggedUser, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        id: id,
        date: action.date,
        user: action.user,
        text: action.text,
        chatId: activeChatId,
        loggedUser: loggedUser === action.user
      }
    default:
      return state
  }
}

const messages = (state = [], activeChatId = null, chats, loggedUser, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, getLastMessageId(state) + 1, activeChatId, loggedUser, action)
      ]
    case 'ADD_RESPONSE':
      action.type = 'ADD_MESSAGE'
      action.date = new Date()
      action.user = getRandomUser(chats, activeChatId)
      action.text = 'Automatic response'

      if (action.user === null) {
        return state
      }

      return [
        ...state,
        message(undefined, getLastMessageId(state) + 1, activeChatId, loggedUser, action)
      ]
    default:
      return state
  }
}

export default messages
