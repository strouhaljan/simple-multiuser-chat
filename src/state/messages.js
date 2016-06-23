export const getLastMessageId = (messagesState) => {
  if (!messagesState || messagesState.length === 0) {
    return 0;
  } else {
    return messagesState.slice(-1)[0].id
  }
}

export const initialState = []
