import React from 'react'
import { connect } from 'react-redux'
import { addChat, activateChat } from '../actions'

let AddChat = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit = {e => {
        e.preventDefault()
        dispatch(addChat('new chat'))
        dispatch(activateChat())
      }}>
        <button className = {'btn btn-primary'} type = "submit">
          New chat window
        </button>
      </form>
    </div>
  )
}
AddChat = connect()(AddChat)

export default AddChat
