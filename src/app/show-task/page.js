import React from 'react'
import ShowTaskPage from './ShowTaskPage'

export const metadata={
    title:"Show Task : Work Manager"
  }
function ShowTask() {
  return (
    <div className="text-3xl">
        <ShowTaskPage/>
    </div>
  )
}

export default ShowTask