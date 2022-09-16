import React, { useState } from 'react'
import QuizItem from '../component/QuizItem';
import data from '../data/data'
import './Home.css'

const Home = () => {

    const allQuestion = data;
    const [randomQuestion, setRandomQuestion] = useState(0)

    const [clickable, setClickable] = useState(true)
    const [selectOption, setSelectOption] = useState(null)

    const correctAns = allQuestion[randomQuestion].correct_option;

    const [score, setScore] = useState(0)
    const [totalQuestion, setTotalQuestion] = useState(0)


    const handleClick = (ans) => {
        setTotalQuestion(prv => prv + 1)
        setClickable(false)
        setSelectOption(ans)
        if (ans === correctAns) {
            setScore(prv => prv + 1)
        }
    }

    const handleNext = () => {
        const random = Math.floor(Math.random() * data.length)
        setRandomQuestion(random)
        setClickable(true)
    }


    return (
        <div className=' mainwrapper '>
            <div className='container'>
                <h1 className='text-danger mb-5'>YOUR SCORE :  {`${score}/${totalQuestion}`}</h1>

                <div>
                    <h3>{allQuestion[randomQuestion].question}</h3>
                    <div className='mt-4 mb-5'>
                        {
                            allQuestion[randomQuestion].options.map(quiz =>
                                <QuizItem
                                    key={quiz}
                                    handleClick={handleClick}
                                    quiz={quiz}
                                    clickable={clickable}
                                    correctAns={correctAns}
                                    selectOption={selectOption}
                                    backgroundColor=
                                    {
                                        quiz == correctAns
                                            ? 'green'
                                            : quiz == selectOption
                                                ? 'red'
                                                : 'red'
                                    }
                                />
                            )
                        }
                    </div>
                    <button
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                            fontSize: '24px',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                        onClick={() => handleNext()}>

                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home