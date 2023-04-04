import '../App.css';
import { useState } from 'react';
import data from '../question.json';


const Questions = ({ currentQuestion,setCurrentQuestion,score,setScore,setResult }) => {
    const handleClick = (i) => {
        if(data[currentQuestion].answer === data[currentQuestion].options[i])
            setScore(score+1);

        if(currentQuestion < 7)
            setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);         
        else
            setResult(true);
    }

    return(
        <div className="mainQuestions">
            <h3>Questions {currentQuestion+1} out of 8</h3>
            <h1>{data[currentQuestion].question}</h1>
            <div className='answers'>
            {
                data.slice(currentQuestion, currentQuestion+1).map((item, index) => (
                    <div className='answers' key={index}>
                        <button onClick={() => handleClick(0)}>{item.options[0]}</button>
                        <button onClick={() => handleClick(1)}>{item.options[1]}</button>
                        <button onClick={() => handleClick(2)}>{item.options[2]}</button>
                        <button onClick={() => handleClick(3)}>{item.options[3]}</button>
                    </div>
                ))
            }
            </div>
            <h4>Score: {score}</h4>
        </div>
    );
}

export default Questions;