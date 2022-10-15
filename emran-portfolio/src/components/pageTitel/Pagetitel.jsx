import React from 'react'
import  './pageTitle.scss'


const PageTitle = (props) => {
    return (
        <div className='titleText'>
            {props.text}
        </div>
    )
}

export default PageTitle
