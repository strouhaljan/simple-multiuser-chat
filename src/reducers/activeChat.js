import { getLastChatId } from '../state/chats'
import { initialState } from '../state/activeChat'

const activeChat = (state = initialState, chatsState, action) => {
  switch (action.type) {
    case 'ACTIVATE_CHAT':
      if (action.id !== false) {
        return action.id
      } else {
        return getLastChatId(chatsState)
      }
    default:
      return state
  }
}

export default activeChat
