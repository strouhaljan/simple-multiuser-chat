import { initialState, getLastChatId } from '../state/chats'

const isAmongUsers = (users, userId) => {
  return (users && users.indexOf(userId) !== -1)
}

const removeUser = (users, userId) => {
  let position = users.indexOf(userId)
  let newUsers = users.slice()
  newUsers.splice(position, 1)
  return newUsers
}

const addUser = (users, userId) => {
  let actualUsers = users || []
  let newUsers = actualUsers.slice()
  newUsers.push(userId)
  return newUsers
}

const chat = (state, action, id) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return {
        id: id,
        name: action.name
      }
    case 'RENAME_CHAT':
      if (state.id != id) {
        return state
      }

      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

const chats = (state = initialState, activeChatId, action) => {
  const activeChat = state[activeChatId]
  switch (action.type) {
    case 'ADD_CHAT':
      return [
        ...state,
        chat(undefined, action, getLastChatId(state) + 1, null)
      ]
    case 'RENAME_CHAT':
      return state.map(c => chat(c, action, activeChatId))
    case 'ADD_USER_TO_CHAT':
      return state.map((chat, index) => {
        if (
          index === activeChatId &&
          !isAmongUsers(chat.users, action.id)
        ) {
          return Object.assign({}, chat, {
            users: addUser(chat.users, action.id)
          })
        }
        return chat
      })
    case 'REMOVE_USER_FROM_CHAT':
    return state.map((chat, index) => {
      if (
        index === activeChatId &&
        isAmongUsers(chat.users, action.id)
      ) {
        return Object.assign({}, chat, {
          users: removeUser(chat.users, action.id)
        })
      }
      return chat
    })
    default:
      return state
  }
}

export default chats
