import React, { PropTypes } from 'react'

const Message = ({ date, userName, text, loggedUser }) => {
  return (
    <p style = {loggedUser ? {float: 'left'} : {float: 'right', textAlign: 'right'}}>
      <strong>{userName}</strong><br />
      <i>({date.toDateString()} {date.toLocaleTimeString()})</i><br />
      {text}<br />
    </p>
  )
}

Message.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loggedUser: PropTypes.bool.isRequired
}

export default Message
