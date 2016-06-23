export const addChat = (name) => {
  return {
    type: 'ADD_CHAT',
    name
  }
}

export const renameChat = (name) => {
  return {
    type: 'RENAME_CHAT',
    name
  }
}

export const activateChat = (id = false) => {
  return {
    type: 'ACTIVATE_CHAT',
    id
  }
}

export const addMessage = (text) => {
  return {
    type: 'ADD_MESSAGE',
    date: new Date(),
    user: 0,
    text
  }
}

export const addResponse = () => {
  return {
    type: 'ADD_RESPONSE'
  }
}

export const addUserToChat = (id) => {
  return {
    type: 'ADD_USER_TO_CHAT',
    id
  }
}

export const removeUserFromChat = (id) => {
  return {
    type: 'REMOVE_USER_FROM_CHAT',
    id
  }
}
