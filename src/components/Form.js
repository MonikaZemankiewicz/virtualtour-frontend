import React from 'react'

function Form(props) {
  return (
    <div>
      {props.video  ? (
        <div clasName = 'mb-3'>
          <label htmlForm = "title" className = "form-label">Title</label>
          <input type="text" className = "form-control" id = "title" placeholder = "Please enter the title"/>
        </div>
      ) : null}
    </div>
  )
}

export default Form
