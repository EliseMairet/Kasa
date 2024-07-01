import React, { useState } from 'react';
import "./collapse.scss";

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='collapse'>
      <div className='collapse_unfold' onClick={toggleCollapse}>
        <div className='collapse_title'>{title}</div>
        <div className={`collapse_icon ${isCollapsed ? 'closed' : 'open'}`}>
        <FontAwesomeIcon icon="fa-regular fa-chevron-down" />
        </div>
      </div>
      {!isCollapsed && <p className='collapse_content'>{content}</p>}
    </div>
  )
}

export default Collapse;