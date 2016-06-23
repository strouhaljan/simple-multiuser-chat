import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Users = ({
  chatUsers,
  users,
  onChatRemoveUserClick,
  onChatAddUserClick
}) => (
  <div>
    <ul>
      {chatUsers.map(user =>
        <li
          key = {user.id}
          onClick = {() => onChatRemoveUserClick(user.id)} >
          {user.name}
          {' '}
          <span className = 'glyphicon glyphicon-minus' aria-hidden="true"></span>
        </li>
      )}
    </ul>
    <h3>Available users</h3>
    <ul>
      {users.map(user =>
        <li
          key = {user.id}
          onClick = {() => onChatAddUserClick(user.id)} >
          {user.name}
          {' '}
          <span className = 'glyphicon glyphicon-plus' aria-hidden="true"></span>
        </li>
      )}
    </ul>
  </div>
)

Users.propTypes = {
  chatUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onChatRemoveUserClick: PropTypes.func.isRequired,
  onChatAddUserClick: PropTypes.func.isRequired
}

export default Users
