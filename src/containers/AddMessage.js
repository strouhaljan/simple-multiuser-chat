import React from 'react'
import { connect } from 'react-redux'
import { addMessage, addResponse } from '../actions'

let AddMessage = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        className = {'form-inline'}
        onSubmit = {e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addMessage(input.value))
          dispatch(addResponse())
          input.value = ''
        }}>
        <div className = {'input-group col-md-12'}>
          <input
            className = {'form-control'}
            placeholder = "Message..."
            ref = {node => {
              input = node
            }} />
          <span className = {'input-group-btn'}>
            <button className = {'btn btn-primary'} type = "submit">
              Send
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}
AddMessage = connect()(AddMessage)

export default AddMessage
