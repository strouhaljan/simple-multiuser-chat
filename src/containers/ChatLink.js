import { connect } from 'react-redux'
import { activateChat } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.id === state.activeChat
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(activateChat(ownProps.id))
    }
  }
}

const ChatLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ChatLink
