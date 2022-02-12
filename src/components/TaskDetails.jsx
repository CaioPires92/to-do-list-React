import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import './TaskDetails.css'
import Button from './Button'
import { useHistory } from 'react-router-dom'

const TaskDetails = () => {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.push(`/`)
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-detail-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam
          dolorum reiciendis perferendis repudiandae mollitia?
        </p>
      </div>
    </>
  )
}

export default TaskDetails
