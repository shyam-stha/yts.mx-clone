import React from 'react'
import "./loading.scss"

const Loading = () => {
  return (
    <div className='loading'>
        <div className="text">Loading...</div>
        <div className="circle-1">
        </div>
        <div className="circle-2"></div>
    </div>
  )
}

export default Loading;