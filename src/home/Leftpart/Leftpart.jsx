import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Leftpart() {
  return (
    <div className="w-full text-gray-300 bg-black ">
        <Search />
        <div style={{ minHeight: 'calc(90vh - 10vh)' }} >
        <Users />
      </div>
        <Logout />
    </div>
  )
}

export default Leftpart