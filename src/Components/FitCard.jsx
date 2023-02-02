import React from 'react'
import './Fitness.css'

const FitCard = (props) => {
  return (
    <>
    <div className='fit-card-dis'>
        <div className='fit-card-1'><img width='100%' src={props.src} alt='Error!'/></div>
        <div className='fit-card-2'>
            <h2>{props.main}</h2>
            <p>{props.para}</p>
            </div>

    </div>
    <hr/>
    </>
  )
}

export default FitCard