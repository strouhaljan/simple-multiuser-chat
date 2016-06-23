export const getLastChatId = (chatsState) => {
  return chatsState.slice(-1)[0].id
}

export const initialState = [
	{
		id: 0,
		name: 'Chat',
    users: []
	}
]
