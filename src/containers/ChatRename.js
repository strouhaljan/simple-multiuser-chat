import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { renameChat } from '../actions'

let ChatRename = ({ name, dispatch }) => {
  let input

  return (
    <div>
      <h3>Chat name</h3>
      <form className = {'form-inline'}>
        <input
          className = {'form-control'}
          onChange = {e => {
            e.preventDefault()
            dispatch(renameChat(input.value))
          }}
          value = {name}
          ref = {node => {
            input = node
          }}
        />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.chats[state.activeChat].name
  }
}

ChatRename = connect(
  mapStateToProps,
  null
)(ChatRename)

export default ChatRename
