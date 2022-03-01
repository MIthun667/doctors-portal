import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Info.css'


const InfoCard = ({info}) => {
  return (
    <div className='col-md-4'>
            <div className='infos'>
                <div className='icons'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className='info'>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
  )
}

export default InfoCard