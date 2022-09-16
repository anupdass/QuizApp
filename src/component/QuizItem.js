import React from 'react'
import { memo } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { GrCheckboxSelected } from 'react-icons/gr'

const QuizItem = ({ quiz, handleClick, clickable, correctAns, backgroundColor }) => {


    return (
        <div className=''>
            <p style={{
                backgroundColor: !clickable ? backgroundColor : 'gray',
                color: 'white',
                padding: '10px',
                width: '100%',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                fontSize: '24px',
                cursor: 'pointer',
            }}
                onClick={() => clickable && handleClick(quiz)}
            >
                {quiz}
                {
                    !clickable && quiz == correctAns
                        ? <AiOutlineCheckCircle color={'white'} />
                        : null
                }
            </p>
        </div >
    )
}

export default memo(QuizItem)