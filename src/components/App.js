import React from 'react'
import ChatList from '../containers/ChatList'
import AddChat from '../containers/AddChat'
import ChatMessages from '../containers/ChatMessages'
import AddMessage from '../containers/AddMessage'
import UserList from '../containers/UserList'
import ChatRename from '../containers/ChatRename'

const App = () => (
  <div className = {'container'} style = {{ padding: '1rem' }}>
    <div className = {'col-md-2'}>
      <ChatList />
      <AddChat />
    </div>
    <div className = {'col-md-7'}>
      <div
        style = {{
          minHeight: '50rem',
          padding: '6px 12px',
          fontSize: '14px',
          lineHeight: '1.42857143',
          color: '#555',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
        }} >
        <ChatMessages />
      </div>
      <br />
      <AddMessage />
    </div>
    <div className = {'col-md-3'}>
      <ChatRename />
      <UserList />
    </div>
  </div>
)

export default App
