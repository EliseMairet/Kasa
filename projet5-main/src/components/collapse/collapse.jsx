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
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      { !isCollapsed && (
        <div className='collapse_content'>
          {Array.isArray(content) ? content.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          }) : content}
        </div>
      )}
    </div>
  )
}

export default Collapse;
