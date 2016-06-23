import { connect } from 'react-redux'
import { addUserToChat, removeUserFromChat } from '../actions'
import Users from '../components/Users'

const getUsers = (users, chats, activeChatId, loggedUser) => {
  let userGroups = {
    chatUsers: [],
    users: []
  }

  if (chats[activeChatId]) {
    const activeChat = chats[activeChatId]

    users.forEach(user => {
      if (user.id !== loggedUser) {
        if (activeChat.users && activeChat.users.indexOf(user.id) !== -1) {
          userGroups.chatUsers.push(user)
        } else {
          userGroups.users.push(user)
        }
      }
    })
  }

  return userGroups
}

const mapStateToProps = (state) => {
  return getUsers(state.users, state.chats, state.activeChat, state.loggedUser)
}


const mapDispatchToProps = (dispatch) => {
  return {
    onChatAddUserClick: (id) => {
      dispatch(addUserToChat(id))
    },
    onChatRemoveUserClick: (id) => {
      dispatch(removeUserFromChat(id))
    }
  }
}

const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default UserList
