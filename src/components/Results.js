import '../App.css';

const Results = ({score, setScore, setResult, setCurrentQuestion}) => {

    const handleClick = () => {
        setScore(0);
        setResult(false);
        setCurrentQuestion(0);
    }
    
    return(
        <div className='mainResults'>
            <h1>Final Results</h1>
            <p>{score} out of 8</p>
            <button className='restartButton' onClick={handleClick}>Restart Quiz</button>
        </div>
    );
}

export default Results;